// Part 2: the same server rewritten with Express, plus routes and a 404 handler.
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// GET / : welcome text
app.get("/", (req, res) => {
  res.status(200).send("Welcome to my Express server!");
});

// GET /about : JSON with name and section
app.get("/about", (req, res) => {
  res.status(200).json({
    name: "ch.venu",
    section: "CSE-GEN-AI-2A-304",
  });
});

// GET /time : current date and time
app.get("/time", (req, res) => {
  res.status(200).send(new Date().toString());
});

// Any other path: 404 (must come after all other routes)
app.use((req, res) => {
  res.status(404).send("404 Not Found: this route does not exist");
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
