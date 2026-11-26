require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const session = require("express-session");
const SQLiteStoreFactory = require("connect-sqlite3");

require("./database/db");
const donorRoutes = require("./routes/donorRoutes");
const requestRoutes = require("./routes/requestRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
const port = Number(process.env.PORT || 5000);
const production = process.env.NODE_ENV === "production";
const allowedOrigins = (process.env.FRONTEND_ORIGIN || "http://localhost:8081,http://localhost:8080,http://localhost:5173,http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));
app.use(express.json({ limit: "100kb" }));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: "draft-7",
  legacyHeaders: false,
}));

const SQLiteStore = SQLiteStoreFactory(session);
app.use(session({
  store: new SQLiteStore({ db: "sessions.db", dir: __dirname }),
  secret: process.env.SESSION_SECRET || "change-this-local-development-secret",
  name: "redroute.sid",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: production ? "none" : "lax",
    secure: production,
    maxAge: 1000 * 60 * 60 * 8,
  },
}));

app.get("/api/health", (req, res) => {
  res.json({ success: true, status: "ok" });
});
app.use("/api/donors", donorRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/admin", adminRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "API route not found." });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({
    success: false,
    message: production ? "An unexpected server error occurred." : error.message,
  });
});

app.listen(port, () => {
  console.log(`RedRoute backend listening at http://localhost:${port}`);
});
