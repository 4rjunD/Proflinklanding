import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "links.db");

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (db) return db;

  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }

  db = new Database(DB_PATH);
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

  return db;
}

export interface Link {
  id: number;
  slug: string;
  label: string;
  destination: string;
  clicks: number;
  conversions: number;
  created_at: string;
}
