let express = require("express");

let app = new express();

const PORT = process.env.PORT || 3000;

// Routers

app.use("/hateoas", require("./src/routes/hateoas.route"));

app.listen(PORT, () => {
  console.log(`The server running at ${PORT}`);
});
