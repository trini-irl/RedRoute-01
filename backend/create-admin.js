require("dotenv").config();
const bcrypt = require("bcryptjs");
const db = require("./database/db");

async function createAdmin() {
  const username = (process.env.ADMIN_USERNAME || "").trim();
  const password = process.env.ADMIN_PASSWORD || "";
  if (!username || !password) {
    console.error("Set ADMIN_USERNAME and ADMIN_PASSWORD in backend/.env, then run this command.");
    process.exit(1);
  }
  if (password.length < 12) {
    console.error("ADMIN_PASSWORD must contain at least 12 characters.");
    process.exit(1);
  }

  const hash = await bcrypt.hash(password, 12);
  const existing = db.prepare("SELECT id FROM admins WHERE username = ?").get(username);
  if (existing) {
    db.prepare("UPDATE admins SET password_hash = ? WHERE id = ?").run(hash, existing.id);
    console.log(`Updated password for admin "${username}".`);
  } else {
    db.prepare("INSERT INTO admins (username, password_hash) VALUES (?, ?)").run(username, hash);
    console.log(`Created admin "${username}".`);
  }
  db.close();
}

createAdmin().catch((error) => {
  console.error(error);
  process.exit(1);
});
