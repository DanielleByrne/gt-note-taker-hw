const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./htmlRoutes")(app);
require("./apiRoutes")(app);


app.listen(PORT, (req, res) => {
  console.log(`Listening on http://localhost:${PORT}`);
});
