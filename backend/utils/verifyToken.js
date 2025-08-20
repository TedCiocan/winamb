// middleware/auth.js
import { verifyToken } from "../utils/jwt.js";

export function getTokenFromReq(req) {
  const header = req.headers.authorization || req.headers.Authorization;
  if (typeof header === "string" && header.startsWith("Bearer ")) {
    return header.slice(7);
  }
  if (req.query?.token) {
    return req.query.token;
  }   // optional for testing
  if (req.body?.token) {
    return req.body.token;
  }     // optional for testing
  return null;
}

export function requireAuth(req, res, next) {
  const token = getTokenFromReq(req);
  if (!token) {
    return res.status(401).json({ error: "Missing token" });
  }

  try {
    const payload = verifyToken(token); // { sub, username, iat, exp }
    req.user = { id: payload.sub, username: payload.username };
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
