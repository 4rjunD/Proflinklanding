const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const DB_DIR = path.join(__dirname, "..", "data");
const DB_PATH = path.join(DB_DIR, "links.db");

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS links (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    label TEXT NOT NULL,
    destination TEXT NOT NULL,
    clicks INTEGER DEFAULT 0,
    conversions INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

// -------------------------------------------------------
// Edit this list to add/remove tracked links.
// Re-run `node scripts/create-links.js` after changes.
// Existing slugs are skipped (won't reset counts).
// -------------------------------------------------------
const TYPEFORM_URL = "https://form.typeform.com/to/KWrV6NVC";

const links = [
  { slug: "creator-john", label: "John" },
  { slug: "linkedin-rishi", label: "Rishi LinkedIn" },
  { slug: "email-march", label: "March Email" },
];

const insert = db.prepare(`
  INSERT OR IGNORE INTO links (slug, label, destination)
  VALUES (?, ?, ?)
`);

let added = 0;
for (const link of links) {
  const result = insert.run(link.slug, link.label, TYPEFORM_URL);
  if (result.changes > 0) {
    console.log(`  + ${link.slug} (${link.label})`);
    added++;
  } else {
    console.log(`  ~ ${link.slug} already exists, skipped`);
  }
}

console.log(`\nDone. ${added} new link(s) added.`);

const all = db.prepare("SELECT slug, label, clicks, conversions FROM links").all();
console.log("\nAll links:");
console.table(all);

db.close();
