const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../database/db");
const { requireAdmin } = require("../middleware/auth");
const { DONOR_STATUSES, REQUEST_STATUSES, cleanText } = require("../utils/validation");

const router = express.Router();

router.post("/login", async (req, res) => {
  const username = cleanText(req.body.username, 80);
  const password = typeof req.body.password === "string" ? req.body.password : "";
  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Username and password are required." });
  }

  const admin = db.prepare("SELECT id, username, password_hash FROM admins WHERE username = ?").get(username);
  if (!admin || !(await bcrypt.compare(password, admin.password_hash))) {
    return res.status(401).json({ success: false, message: "Incorrect username or password." });
  }

  req.session.regenerate((error) => {
    if (error) return res.status(500).json({ success: false, message: "Could not start session." });
    req.session.adminId = admin.id;
    req.session.username = admin.username;
    req.session.save((saveError) => {
      if (saveError) return res.status(500).json({ success: false, message: "Could not save session." });
      res.json({ success: true, admin: { id: admin.id, username: admin.username } });
    });
  });
});

router.post("/logout", requireAdmin, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("redroute.sid");
    res.json({ success: true, message: "Logged out." });
  });
});

router.get("/session", requireAdmin, (req, res) => {
  res.json({
    success: true,
    admin: { id: req.session.adminId, username: req.session.username },
  });
});

router.get("/donors", requireAdmin, (req, res) => {
  const status = cleanText(req.query.status, 20);
  if (status && !DONOR_STATUSES.includes(status)) {
    return res.status(400).json({ success: false, message: "Invalid donor status." });
  }
  const where = status ? "WHERE status = ?" : "";
  const params = status ? [status] : [];
  const donors = db.prepare(`
    SELECT id, display_name, blood_group, city, pin_code, availability, status, created_at, updated_at
    FROM donors
    ${where}
    ORDER BY created_at DESC
  `).all(...params);
  res.json({ success: true, donors });
});

router.patch("/donors/:id/status", requireAdmin, (req, res) => {
  const id = Number(req.params.id);
  const status = cleanText(req.body.status, 20);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ success: false, message: "Invalid donor ID." });
  }
  if (!DONOR_STATUSES.includes(status)) {
    return res.status(400).json({ success: false, message: "Invalid donor status." });
  }
  const existing = db.prepare("SELECT id FROM donors WHERE id = ?").get(id);
  if (!existing) return res.status(404).json({ success: false, message: "Donor not found." });
  db.prepare(`
    UPDATE donors SET status = ?, updated_at = datetime('now') WHERE id = ?
  `).run(status, id);
  res.json({ success: true, donor: { id, status } });
});

router.get("/requests", requireAdmin, (req, res) => {
  const status = cleanText(req.query.status, 20);
  if (status && !REQUEST_STATUSES.includes(status)) {
    return res.status(400).json({ success: false, message: "Invalid request status." });
  }
  const where = status ? "WHERE r.status = ?" : "";
  const params = status ? [status] : [];
  const requests = db.prepare(`
    SELECT r.id, r.donor_id, r.requester_name, r.message, r.status, r.created_at, r.updated_at,
           d.display_name AS donor_name, d.blood_group, d.city
    FROM requests r
    JOIN donors d ON d.id = r.donor_id
    ${where}
    ORDER BY r.created_at DESC
  `).all(...params);
  res.json({ success: true, requests });
});

router.patch("/requests/:id/status", requireAdmin, (req, res) => {
  const id = Number(req.params.id);
  const status = cleanText(req.body.status, 20);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ success: false, message: "Invalid request ID." });
  }
  if (!REQUEST_STATUSES.includes(status)) {
    return res.status(400).json({ success: false, message: "Invalid request status." });
  }
  const existing = db.prepare("SELECT id FROM requests WHERE id = ?").get(id);
  if (!existing) return res.status(404).json({ success: false, message: "Request not found." });
  db.prepare(`
    UPDATE requests SET status = ?, updated_at = datetime('now') WHERE id = ?
  `).run(status, id);
  res.json({ success: true, request: { id, status } });
});

module.exports = router;
