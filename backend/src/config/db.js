import sqlite3 from "sqlite3";
import { open } from "sqlite";
import dotenv from "dotenv"
dotenv.config()

export const initDB = async () => {
  const db = await open({
    filename: `./${process.env.DB_NAME}.sqlite`,
    driver: sqlite3.Database,
  });

  // Tables Categories
  await db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Tables Users
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`)

  //Tables Products
  await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    category_id INTEGER,
    cost_price DECIMAL(10, 2),
    selling_price DECIMAL(10, 2),
    stock INTEGER,
    image_url VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
)
`)

  //Tables sale
  await db.exec(`
    CREATE TABLE IF NOT EXISTS sales(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    total_amount DECIMAL(15, 2),
    paid_amount DECIMAL(15, 2),
    change_amount DECIMAL(15, 2),
    is_completed INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) 
)
`)

  await db.exec(`
    CREATE TABLE IF NOT EXISTS sale_detail(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sales_id INTEGER,
      product_id INTEGER,
      amount INTEGER,
      total DECIMAL(15, 2),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (sales_id) REFERENCES sales(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
)
`)

  return db;
};
