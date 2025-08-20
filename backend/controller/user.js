// controller/user.js
import User from "../model/user.js";

/**
 * GET /api/v1/me
 * Requires: requireAuth (sets req.user = { id, username })
 *
 * Variant A (recommended): fetch fresh user from DB (without password)
 */
export const me = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select("_id username email createdAt updatedAt"); // never select password
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (err) {
    console.error("me error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

/**
 * Variant B (ultra-light): if you only want what was in the token
 * (uncomment to use instead of Variant A)
 */
// export const me = (req, res) => {
//   return res.json({ user: { id: req.user.id, username: req.user.username } });
// };
