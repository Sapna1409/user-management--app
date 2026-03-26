import { Router } from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controller/userController"; // ⚠️ yahi correct path hai

const router = Router();

// ✅ CREATE
router.post("/users", createUser);

// ✅ GET ALL
router.get("/users", getUsers);

// ✅ UPDATE
router.put("/users/:id", updateUser);

// ✅ DELETE
router.delete("/users/:id", deleteUser);

export default router;