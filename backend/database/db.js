const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "..", "redroute.db");
const db = new Database(dbPath);

db.pragma("foreign_keys = ON");
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS donors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    display_name TEXT NOT NULL,
    blood_group TEXT NOT NULL CHECK (blood_group IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
    city TEXT NOT NULL,
    pin_code TEXT NOT NULL,
    availability TEXT NOT NULL CHECK (availability IN ('Available', 'Weekends only', 'Evenings only', 'Not available now')),
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'rejected', 'inactive')),
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    donor_id INTEGER NOT NULL,
    requester_name TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'fulfilled', 'closed')),
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (donor_id) REFERENCES donors(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE INDEX IF NOT EXISTS idx_donors_search ON donors(status, blood_group, city, pin_code);
  CREATE INDEX IF NOT EXISTS idx_requests_donor ON requests(donor_id);
  CREATE INDEX IF NOT EXISTS idx_requests_status ON requests(status);
`);

// Fictional profiles make the directory useful immediately without using real people.
const seedCount = db.prepare("SELECT COUNT(*) AS count FROM donors").get().count;
if (seedCount === 0) {
  const insert = db.prepare(`
    INSERT INTO donors (display_name, blood_group, city, pin_code, availability, status)
    VALUES (?, ?, ?, ?, ?, 'active')
  `);
  const seed = [
    ["Asha Example", "O+", "North Quarter", "110001", "Available"],
    ["Elliot Example", "A-", "Riverside", "110002", "Weekends only"],
    ["Mina Example", "B+", "Old Town", "110003", "Evenings only"],
    ["Noah Example", "O-", "West End", "110004", "Available"],
  ];
  const seedMany = db.transaction((rows) => rows.forEach((row) => insert.run(...row)));
  seedMany(seed);
}

module.exports = db;
