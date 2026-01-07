-- Enable foreign key enforcement in SQLite
PRAGMA foreign_keys = ON;

-- Domain table
CREATE TABLE IF NOT EXISTS domain (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

-- Pod table
CREATE TABLE IF NOT EXISTS pod (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

-- Member table
CREATE TABLE IF NOT EXISTS member (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    domain_id INTEGER NOT NULL,
    pod_id INTEGER NOT NULL,

    FOREIGN KEY (domain_id)
        REFERENCES domain(id)
        ON DELETE CASCADE,

    FOREIGN KEY (pod_id)
        REFERENCES pod(id)
        ON DELETE CASCADE,

    -- Ensures only ONE member per domain–pod cell
    UNIQUE (domain_id, pod_id)
);