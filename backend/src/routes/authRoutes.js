import { Router } from "express";

export const createAuthRoutes = (controller) => {
    const router = Router();

    router.post("/", controller.login);

    return router;
}
