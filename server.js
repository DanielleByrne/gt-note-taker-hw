const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("works")
});

app.listen(PORT, (req, res) => {
  console.log(`Listening on http://localhost:${PORT}`);
});