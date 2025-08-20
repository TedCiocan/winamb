winamb

A minimal full-stack music search/auth app (React + Express + MongoDB + Spotify API).
Auth uses JWT; frontend stores the token in localStorage and shows/hides UI based on auth state.

✨ Features

JWT auth (/signup, /login) with password hashing

Protected routes via middleware (requireAuth)

“Current user” endpoint (/me)

React Router layout with shared NavBar/Footer

AuthContext on the frontend (token-only or token+user)

Spotify search (app token) — optional

🧱 Tech Stack

Frontend: React, React Router, Vite, CSS
Backend: Node (ESM), Express 5, Mongoose, JWT, bcryptjs, CORS, dotenv
DB: MongoDB / Atlas


🔐 Environment

Create a .env file in backend/:

SPOTIFY_CLIENT_ID=***
SPOTIFY_CLIENT_SECRET=****
PORT=5005
MONGO_URI=USE_YOUR_OWN_URL
DB_NAME=musiclab
JWT_EXPIRES_IN=7d
JWT_SECRET=secreto

Never commit secrets. Use your own MongoDB connection string (Atlas or local).



🚀 Quick Start

Start by running npm install in both apps (frontend and backend), then run npm run dev.

Backend

cd backend
npm install
npm run dev


Starts Express on http://localhost:5005 (by default).

Make sure MongoDB is reachable via MONGO_URI.

Frontend

cd frontend
npm install
npm run dev


Starts Vite dev server (usually http://localhost:5173).

Open the frontend in your browser and sign up / log in.


🧭 Frontend Auth Flow

On login success, backend returns { token, user }.

Frontend saves:

localStorage.setItem("token", token);

optionally: localStorage.setItem("user", JSON.stringify(user));

AuthContext restores the token on refresh, exposes isAuthed, login(), logout().

NavBar shows Login/Signup vs Search/Logout based on isAuthed.



🧪 cURL Smoke Tests

Signup

curl -X POST http://localhost:5005/api/v1/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"melody","email":"melody@example.com","password":"secret123"}'


Login

curl -X POST http://localhost:5005/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"identifier":"melody","password":"secret123"}'


Me (protected)

TOKEN=paste-jwt-here
curl http://localhost:5005/api/v1/me -H "Authorization: Bearer $TOKEN"

⚙️ Scripts (backend)

package.json (backend):

{
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  }
}


Ensure env is loaded before anything that reads it:

in server.js: import "dotenv/config"; at the top or

use Node flags: "start": "node --env-file=.env server.js"

🩺 Troubleshooting

JWT_SECRET is not set
Add JWT_SECRET to backend/.env and ensure env is loaded before importing utils/jwt.js.

EADDRINUSE: :5005
Another process is on that port. Change PORT in .env or kill the process.

MongoNetworkError / connect timeouts
Check MONGO_URI, IP whitelist (Atlas), and network.

CORS errors from frontend
Set allowed origin in backend:

app.use(cors({ origin: "http://localhost:5173", credentials: true }));


ERR_MODULE_NOT_FOUND / wrong import path
ESM requires exact paths + .js extension; make sure import User from "../model/user.js"; matches your folder/file names.



🔒 Security Notes

Never include sensitive fields in tokens or responses (e.g., password).

Hash passwords in the model with a pre-save hook.

Use select: false for password; explicitly select it only for login.

Handle duplicate key errors (MongoError 11000) with 409 Conflict.



📦 Deployment Tips

Use environment variables (no hard-coded secrets).

Set NODE_ENV=production.

Use a production process manager (PM2, Docker) and HTTPS in front (NGINX/Cloud).

Configure CORS to only allow your production frontend domain.



✅ Checklist

 Create backend/.env with required keys

 Run npm install in both backend/ and frontend/

 Run npm run dev in both apps

 Visit the frontend, sign up, then log in

 Verify /me works with the returned token

Happy building! 🎵
