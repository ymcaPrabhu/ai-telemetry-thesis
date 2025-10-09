# Story 1.3: Set up the database

## Status

Draft

## Story

**As a** developer,
**I want** to set up a database for the project,
**so that** we can store user data and other application data.

## Acceptance Criteria

1. The database can be connected to from the web server.
2. A simple schema for storing user data is created.

## Tasks / Subtasks

- [x] Task 1 (AC: #1)
    - [x] Create a `database.js` file in the `apps/api` directory.
    - [x] Add the necessary code to connect to the database.
- [x] Task 2 (AC: #2)
    - [x] Create a SQL script to create the `users` and `theses` tables.

## Dev Notes

This story sets up the database for the project. For development, we will use SQLite, and for production, we will use Supabase (PostgreSQL).

### Testing

- Manual verification by connecting to the database and creating the tables is sufficient.

## Change Log

| Date | Version | Description | Author |
| :--- | :--- | :--- | :--- |
| 2025-10-09 | 1.0 | Initial story creation | Sarah |
| 2025-10-09 | 1.1 | Completed all tasks | James |

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

- All tasks completed successfully.

### File List

- `apps/api/src/database.js`
- `apps/api/src/schema.sql`

