const express = require("express");
const rateLimit = require("express-rate-limit");
const db = require("../database/db");
const { cleanText } = require("../utils/validation");

const router = express.Router();
const requestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { success: false, message: "Too many requests. Please try again later." },
});

router.post("/", requestLimiter, (req, res) => {
  const donorId = Number(req.body.donorId);
  const requesterName = cleanText(req.body.requesterName || req.body.name, 120);
  const message = cleanText(req.body.message, 1000);

  if (!Number.isInteger(donorId) || donorId <= 0) {
    return res.status(400).json({ success: false, message: "A valid donor is required." });
  }
  if (!requesterName || !message) {
    return res.status(400).json({ success: false, message: "Please provide your name and message." });
  }

  const donor = db.prepare(
    "SELECT id, status FROM donors WHERE id = ?"
  ).get(donorId);
  if (!donor) {
    return res.status(404).json({ success: false, message: "Donor not found." });
  }
  if (donor.status !== "active") {
    return res.status(409).json({ success: false, message: "Requests are only accepted for active donors." });
  }

  const result = db.prepare(`
    INSERT INTO requests (donor_id, requester_name, message, status)
    VALUES (?, ?, ?, 'pending')
  `).run(donorId, requesterName, message);

  res.status(201).json({
    success: true,
    message: "Your request was submitted for review.",
    request: { id: result.lastInsertRowid, status: "pending" },
  });
});

module.exports = router;
