// utils/jwt.js
import jwt from "jsonwebtoken";


const getSecret = () => process.env.JWT_SECRET;
const getExpiresIn = () => process.env.JWT_EXPIRES_IN || "7d";







/**
 * Sign a JWT for a user (or any payload).
 * - If  pass a Mongoose user doc, it will build { sub, username } automatically.
 * - You can also pass a custom plain object payload.
 *
 * @param {object} userOrPayload - Mongoose user doc or plain payload object.
 * @param {object} [options] - Optional jwt.sign options (merged with default expiresIn).
 * @returns {string} JWT
 */
export function signToken(user) {
    const payload = { sub: String(user._id), username: user.username };
    const secret = getSecret();
    if (!secret) {
      throw new Error("JWT_SECRET is not set");
    }
    return jwt.sign(payload, secret, { expiresIn: getExpiresIn() });
  }

/**
 * Verify a JWT and return its payload (or throw if invalid/expired).
 * @param {string} token
 * @returns {object} payload
 */
export function verifyToken(token) {
    const secret = getSecret();
    if (!secret) {
      throw new Error("JWT_SECRET is not set");
    }
    return jwt.verify(token, secret);
  }

/**
 * Decode a JWT without verifying (useful for debugging).
 * @param {string} token
 * @returns {object|null} decoded
 */
export function decodeToken(token) {
  return jwt.decode(token);
}
