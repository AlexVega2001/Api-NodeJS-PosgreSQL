import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

// METHODS GET
router.get("/get-all-users", userController.GetListUsersController);

// METHODS POST
router.post("/register-user", userController.RegisterUserController);
router.post("/register-role", userController.RegisterRoleController);
router.post("/assign-role", userController.AssignRoleController);
router.post("/active-user", userController.ActiveUserController);
router.post("/inactive-user", userController.InactiveUserController);
router.post("/close-session", userController.CloseSessionController);
router.post("/login-user", userController.LoginUserController);

export default router;