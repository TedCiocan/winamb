// routes/user.routes.js
import { Router } from "express";
import { me } from "../controller/user.js";
import { requireAuth } from "../utils/verifyToken.js";

const router = Router();

// GET /api/v1/me  → protected, returns current user
router.get("/me", requireAuth, me);

export default router;
