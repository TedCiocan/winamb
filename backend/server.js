import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import authrouter from './routes/authroute.js';
import userrouter from './routes/userroute.js';
import connectDB from './database/db.js';

const app = express();


await connectDB();
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// const clientId = process.env.SPOTIFY_CLIENT_ID;
// const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
// const SECRET_KEY = process.env.JWT_SECRET || 'default_secret';

// // In-memory user store (for MVP demo)
// const users = [];

// // Get Spotify token
// let accessToken = '';
// let tokenExpiresAt = 0;

// async function getSpotifyToken() {
//   const res = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 'grant_type=client_credentials'
//   });
//   const data = await res.json();
//   accessToken = data.access_token;
//   tokenExpiresAt = Date.now() + (data.expires_in * 1000);
// }

// async function ensureSpotifyToken(req, res, next) {
//   if (!accessToken || Date.now() >= tokenExpiresAt) {
//     await getSpotifyToken();
//   }
//   next();
// }

// // Auth middleware
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader?.split(' ')[1];
//   if (!token) return res.sendStatus(401);
//   jwt.verify(token, SECRET_KEY, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }




// Search Spotify tracks

// app.get('/api/search', ensureSpotifyToken, authenticateToken, async (req, res) => {
// //  app.get('/api/search', ensureSpotifyToken, async (req, res) => {
//   const query = req.query.q;
//   if (!query) return res.status(400).json({ error: 'Missing ?q=' });
//   try {
//     const spotifyRes = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=5`, {
//       headers: { 'Authorization': 'Bearer ' + accessToken }
//     });
//     const data = await spotifyRes.json();
//     res.json(data.tracks.items);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Spotify API error' });
//   }
// });


app.use("/api/v1/auth", authrouter);
app.use("/api/v1/user", userrouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Internal server error" });
});



const PORT = 5005;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
