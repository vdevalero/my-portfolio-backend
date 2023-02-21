import { Router } from "express";
//controllers
import { loginController } from "../../controllers/auth/auth.controller.js";
//middlewares
import { verifyToken, admin } from "../../middlewares/requireAuth.js";
//sub routes
import adminRoutes from "../admin/admin.routes.js";

const router = Router();

//login
router.post("/", loginController);

//dashboard
router.use("/dashboard", [verifyToken, admin], adminRoutes);

export default router;
