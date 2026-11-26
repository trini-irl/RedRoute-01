const express = require("express");
const db = require("../database/db");
const {
  BLOOD_GROUPS,
  AVAILABILITY,
  cleanText,
  isPinCode,
} = require("../utils/validation");

const router = express.Router();

router.get("/", (req, res) => {
  const bloodGroup = cleanText(req.query.bloodGroup || req.query.blood_group, 3);
  const city = cleanText(req.query.city || req.query.location, 120);
  const pinCode = cleanText(req.query.pinCode || req.query.pin_code, 6);

  if (bloodGroup && !BLOOD_GROUPS.includes(bloodGroup)) {
    return res.status(400).json({ success: false, message: "Invalid blood group." });
  }
  if (pinCode && !isPinCode(pinCode)) {
    return res.status(400).json({ success: false, message: "PIN code must contain 6 digits." });
  }

  const conditions = ["status = 'active'"];
  const params = [];
  if (bloodGroup) {
    conditions.push("blood_group = ?");
    params.push(bloodGroup);
  }
  if (city) {
    conditions.push("(LOWER(city) LIKE LOWER(?) OR LOWER(display_name) LIKE LOWER(?))");
    params.push(`%${city}%`, `%${city}%`);
  }
  if (pinCode) {
    conditions.push("pin_code = ?");
    params.push(pinCode);
  }

  const sql = `
    SELECT id, display_name, blood_group, city, pin_code, availability
    FROM donors
    WHERE ${conditions.join(" AND ")}
    ORDER BY updated_at DESC
  `;
  const donors = db.prepare(sql).all(...params);
  res.json({ success: true, count: donors.length, donors });
});

router.post("/", (req, res) => {
  const displayName = cleanText(req.body.displayName || req.body.name, 120);
  const bloodGroup = cleanText(req.body.bloodGroup || req.body.blood_group, 3);
  const city = cleanText(req.body.city, 120);
  const pinCode = cleanText(req.body.pinCode || req.body.pin_code, 6);
  const availability = cleanText(req.body.availability, 40);

  if (!displayName || !bloodGroup || !city || !pinCode || !availability) {
    return res.status(400).json({ success: false, message: "Please complete every required field." });
  }
  if (!BLOOD_GROUPS.includes(bloodGroup)) {
    return res.status(400).json({ success: false, message: "Invalid blood group." });
  }
  if (!isPinCode(pinCode)) {
    return res.status(400).json({ success: false, message: "PIN code must contain 6 valid digits." });
  }
  if (!AVAILABILITY.includes(availability)) {
    return res.status(400).json({ success: false, message: "Invalid availability option." });
  }

  const duplicate = db.prepare(`
    SELECT id FROM donors
    WHERE LOWER(display_name) = LOWER(?) AND blood_group = ? AND pin_code = ?
    LIMIT 1
  `).get(displayName, bloodGroup, pinCode);
  if (duplicate) {
    return res.status(409).json({
      success: false,
      message: "A registration with these details already exists.",
    });
  }

  const result = db.prepare(`
    INSERT INTO donors (display_name, blood_group, city, pin_code, availability, status)
    VALUES (?, ?, ?, ?, ?, 'pending')
  `).run(displayName, bloodGroup, city, pinCode, availability);

  res.status(201).json({
    success: true,
    message: "Thank you. Your registration is pending admin review.",
    donor: { id: result.lastInsertRowid, displayName, bloodGroup, status: "pending" },
  });
});

module.exports = router;
