const { drizzle } = require("drizzle-orm/mysql2");
const mysql = require("mysql2/promise");
const schema = require("./schema");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

if (!DB_HOST || !DB_USER || !DB_NAME) {
  console.warn(
    "[WARN] Database configuration (DB_HOST, DB_USER, DB_NAME) is missing in environment variables. Please check your .env file."
  );
}

const poolConnection = mysql.createPool({
  host: DB_HOST || "localhost",
  port: Number(DB_PORT) || 3306,
  user: DB_USER || "root",
  password: DB_PASSWORD || "",
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const db = drizzle(poolConnection, { schema, mode: "default" });

module.exports = db;
