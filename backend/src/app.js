import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import upload from "./utils/uploads.js";
import path from 'path'

import { categoryController } from "./controllers/categoriesController.js";
import { createCategoriesRoutes } from "./routes/categoriesRoutes.js";

import { productsController } from "./controllers/productsController.js";
import { createProductsRoutes } from "./routes/productsRoutes.js";

import { usersController } from "./controllers/usersController.js";
import { createUsersRoutes } from "./routes/usersRoutes.js";

import { salesController } from "./controllers/salesController.js";
import { createSalesRoutes } from "./routes/salesRoutes.js";

import { saleDetailController } from "./controllers/saleDetailController.js";
import { createSaleDetailRoutes } from "./routes/saleDetailRoutes.js";

import { authController } from "./controllers/authController.js";
import { createAuthRoutes } from "./routes/authRoutes.js";




import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

export const createApp = async () => {
    const app = express();
    const db = await initDB();


    app.use(cors());
    app.use(express.json());

    // Uploads

    app.use('/uploads', express.static(path.join("uploads/")))

    // Routes
    app.use("/api/categories", createCategoriesRoutes(categoryController(db)));

    app.use("/api/products", createProductsRoutes(productsController(db)));

    app.use("/api/users", createUsersRoutes(usersController(db)))

    app.use("/api/sales", createSalesRoutes(salesController(db)))

    app.use("/api/sale-detail", createSaleDetailRoutes(saleDetailController(db)))

    app.use("/api/auth", createAuthRoutes(authController(db)))

    // Error handling
    app.use(errorHandler);

    return app;
};
