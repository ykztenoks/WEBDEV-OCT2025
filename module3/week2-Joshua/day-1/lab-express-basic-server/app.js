// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const app = express();
const morgan = require("morgan");
const projectsJson = require("./data/projects.json");
const articlesJson = require("./data/articles.json");
//this is some really cool code that does something
// CREATE EXPRESS APP
// Here you should create your Express app:

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  res.json(projectsJson);
});
app.get("/api/articles", (req, res) => {
  res.status(200).json(articlesJson);
});
app.use((req, res) => {
  res.sendFile(__dirname + "/views/not-found.html");
});
// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("server is running, nice work");
});
