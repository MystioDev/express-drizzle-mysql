# Express + Drizzle ORM + MySQL Starter Template

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-5.x-blue.svg)](https://expressjs.com/)
[![Drizzle ORM](https://img.shields.io/badge/drizzle--orm-latest-C5F74F.svg)](https://orm.drizzle.team/)
[![MySQL](https://img.shields.io/badge/mysql-8.x-orange.svg)](https://www.mysql.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

A minimal, clean, and beginner-friendly REST API template built with **Express 5**, **Drizzle ORM**, and **MySQL**.

> [!IMPORTANT]
> **Exam Branch Notice (`exam`)**
> This branch was created **exclusively for students taking exams**. Unlike the `master` branch, the pre-built `users` schema and `/api/users` CRUD endpoints have been removed and replaced with clean placeholders (`src/db/schema.js`, `src/routes/example.js`, and commented route imports in `src/index.js`) so students can implement their exam tasks from scratch.

---

## ⚡ Quick Start: Use This Template

You can spin up your own backend API in seconds using this repository as a template.

### For Students (Cloning the `exam` Branch Directly)

```bash
git clone -b exam https://github.com/MystioDev/express-drizzle-mysql.git
cd express-drizzle-mysql
```

### Option A: Using the GitHub UI (Recommended)

1. Click the green **[Use this template](https://github.com/new)** button at the top of this repository.
2. Select **"Create a new repository"**.
3. Choose an owner, name your new project (e.g. `my-awesome-api`), and click **Create repository**.
4. Clone **your new repository**:
   ```bash
   git clone https://github.com/<your-username>/<your-new-repo>.git
   cd <your-new-repo>
   ```

### Option B: Using GitHub CLI

```bash
# Create a new repo from this template and clone it locally
gh repo create my-awesome-api --template MystioDev/express-drizzle-mysql --clone
cd my-awesome-api
```

---

## 🛠️ Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- A running [MySQL](https://www.mysql.com/) instance

> **Tip: Quick MySQL via Docker**
> ```bash
> docker run --name mysql-dev -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=express_drizzle_db -p 3306:3306 -d mysql:8
> ```

---

### Step-by-Step Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Open `.env` and set your database connection URL:
   ```env
   PORT=3000
   DATABASE_URL="mysql://root:password@localhost:3306/express_drizzle_db"
   ```

3. **Push the database schema:**
   Sync the Drizzle schema directly to your MySQL database:
   ```bash
   npm run db:push
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Your server is live at [http://localhost:3000](http://localhost:3000)!

---

## 📁 Project Structure

```text
├── drizzle/                     # Drizzle Kit generated migrations & schema snapshots
├── src/
│   ├── db/
│   │   ├── db.js                # MySQL pool & Drizzle ORM client
│   │   └── schema.js            # Drizzle table schemas (empty placeholder)
│   ├── routes/
│   │   └── example.js           # Example route placeholder
│   └── index.js                 # Server entry point & route mounting
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── drizzle.config.js            # Drizzle Kit configuration
├── package.json                 # Project dependencies & scripts
└── README.md                    # Project documentation
```

---

## 🎨 Customizing the Template for Your Project

When using this template for an exam or a new backend project, follow these steps:

1. **Define Your Tables (`src/db/schema.js`)**:
   Define and export your MySQL tables using Drizzle ORM.

2. **Create Your Routes (`src/routes/example.js` or a new route file)**:
   Implement your Express router in `src/routes/example.js` (or rename/create a new route file under `src/routes/`).

3. **Mount Your Routes (`src/index.js`)**:
   Import your router and register it with `app.use(...)` in `src/index.js`.

4. **Sync Your Database Schema**:
   Push your Drizzle schema changes to MySQL using `npm run db:push`.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `nodemon src/index.js` | Starts the server with live reload |
| `npm start` | `node src/index.js` | Runs the server in production mode |
| `npm run db:push` | `drizzle-kit push` | Applies schema changes directly to MySQL |
| `npm run db:generate` | `drizzle-kit generate` | Generates SQL migrations from schema |
| `npm run db:migrate` | `drizzle-kit migrate` | Applies generated SQL migrations |
| `npm run db:studio` | `drizzle-kit studio` | Opens Drizzle Studio (web database browser) |
| `npm run db:check` | `drizzle-kit check` | Validates schema consistency |

---

## 📝 Exam Branch Details (`exam`)

Compared to the `master` branch, this branch has been stripped down to a clean starting point for student exams:

- **`src/db/schema.js`**: Pre-configured with `drizzle-orm/mysql-core` imports and an empty `module.exports = {}` (the sample `users` table was removed).
- **`src/routes/example.js`**: Replaces `src/routes/users.js` with an empty route placeholder file.
- **`src/index.js`**: Express app and JSON middleware are configured, with `exampleRouter` import and `/api/example` mounting commented out and ready to be enabled.

---

## 📄 License

[ISC](LICENSE)
