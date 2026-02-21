const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(express.json()) // parse INCOMING json bodies from req.body
app.use(morgan("dev"))

app.use((req, res, next) => {
  console.log("HEADS UP we got a request")
  next()
})

app.use(express.static("public"))
//syntax for the route
// app.get("/", (req, res, next) => {})

app.get("/", (req, res) => {
  return res.status(200).json("We are good, our server is alive")
})

app.get("/hello", (req, res) => {
  return res.send(
    "<h1>Hello world</h1> <p>this is our first HTML coming from the server</p>",
  )
})

app.get("/cat-hardcoded", (req, res, next) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Cat</h1>
        <p>This is my second route</p>
        <img src="/images/coolcat.jpg" />
      </body>
    </html>
  `)
})

app.get("/homepage", (req, res) => {
  res.sendFile(__dirname + "/views/homepage.html")
})

app.get("/cat", (req, res) => {
  res.sendFile(__dirname + "/views/catpage.html")
})

// app.post(...)
// app.put(...)
// app.patch(...)
// app.delete(...)

app.listen(8080, () => {
  console.log("Server is up and running")
})
