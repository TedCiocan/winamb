// routes/auth.routes.js
import express from "express"; // Import express
import { signup, login } from "../controller/auth.js"; // Import the controller functions
const router = express.Router();

router.post("/signup", signup);           
router.post("/login", login);            

export default router;
