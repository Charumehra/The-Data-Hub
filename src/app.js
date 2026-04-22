const express = require("express");
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log(`[${req.method}]  ${req.url} - ${time}`);
  next();
});

app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

module.exports = app;
