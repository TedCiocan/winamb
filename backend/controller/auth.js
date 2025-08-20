// backend/controller/auth.js
import jwt from "jsonwebtoken";
import User from "../model/user.js"; // make sure this path/case is correct
import { signToken } from "../utils/jwt.js";

// POST /api/v1/signup
export const signup = async (req, res) => {
  /* This code block is handling the signup functionality in the authentication controller. */
  
  try {
    const { username, email, password } = req.body || {};
    if (!username || !email || !password) {
      return res.status(400).json({ error: "username, email and password are required" });
    }

    const exists = await User.findOne({ $or: [{ username }, { email }] }).lean();
    if (exists) {
      return res.status(409).json({ error: "Username or email already in use" });
    }

    const user = await User.create({ username, email, password }); // password hashed by pre-save hook
    return res.status(201).json({
      message: "Account created successfully",
      userId: { id: user._id},
    });
  } catch (err) {
    if (err?.code === 11000) {
      return res.status(409).json({ error: "Username or email already in use" });
    }
    console.error("signup error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// POST /api/v1/login  (username OR email + password)
export const login = async (req, res) => {
    try {
      const { identifier, password } = req.body || {};
      if (!identifier || !password) {
        return res.status(400).json({ error: "identifier and password are required" });
      }
  
      // simple normalization
      const id = String(identifier).trim();
      const query = {
        $or: [
          { username: id },            // exact username
          { email: id.toLowerCase() }, // emails are stored lowercase in your schema
        ],
      };
  
      // password is select:false in schema, so include it explicitly for compare
      const user = await User.findOne(query).select("+password");
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      const ok = await user.comparePassword(password);
      if (!ok) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      const token = signToken(user); // signs { sub, username } only
  
      // return minimal info; adjust if you want more
      return res.json({
        token,
        user: { id: user._id, username: user.username },
      });
    } catch (err) {
      console.error("login error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
