const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");

dotenv.config();

const app = express();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Update this to match your frontend URL
    credentials: true, // Enable credentials (cookies, authorization headers, etc.) to be included in requests
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.post("/auth/google", async (req, res) => {
  const { token } = req.body;
  console.log(token);
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const userid = payload["sub"];

    req.session.user = { id: userid, email: payload.email };
    res
      .status(200)
      .json({ message: "User authenticated successfully", user: payload });
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
});

// Home Route (Authenticated)
app.get("/", (req, res) => {
  if (req.session.user) {
    res.send("You are logged in.");
  } else {
    res.redirect("/login");
  }
});

// Logout Route
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
