import { Router } from "express";

export const createSaleDetailRoutes = (controller) => {
    const router = Router();

    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.get("/sales/:id", controller.getBySalesId)
    router.post("/", controller.create);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.delete);

    return router;
};
