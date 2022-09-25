let express = require("express");
let path = require("path");
let app = new express();
let fs = require("fs");
let helmet = require("helmet");
let morgan = require("morgan");

//helper
let { formatLocalDate } = require("./utils/helper");

const PORT = process.env.PORT || 3000;

// middleware
require("dotenv").config(); // config for node get .env file

let accessLogStream = fs.createWriteStream(
  path.join(__dirname, `${formatLocalDate()}.access.log`),
  {
    flags: "a"
  }
);

app.use(helmet()); // safe header of request
app.use(
  // get log of request and write log to file access.log
  morgan("common", {
    stream: accessLogStream
  })
);

// Routers
app.get("/", (req, res, next) => {
  res.send("Welcome to My App");
});

app.use("/hateoas", require("./routes/hateoas.route"));

app.listen(PORT, () => {
  console.log(`The server running at ${PORT}`);
});
