CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS theses (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  title TEXT NOT NULL,
  outline TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'in_progress',
  FOREIGN KEY (user_id) REFERENCES users (id)
);
