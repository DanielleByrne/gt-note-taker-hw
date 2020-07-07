const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./htmlRoutes")(app);
require("./apiRoutes")(app);


// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });
// app.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

app.listen(PORT, (req, res) => {
  console.log(`Listening on http://localhost:${PORT}`);
});