import { Router } from "express";
import upload from "../utils/uploads.js";

export const createProductsRoutes = (controller) => {
    const router = Router();

    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.post("/", upload.single("image"), controller.create);
    router.put("/:id", upload.single("image"), controller.update);
    router.delete("/:id", controller.delete);

    return router;
}
