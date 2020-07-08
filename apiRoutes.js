// var notes = require("./server");
const express = require("express");
const path = require("path");
const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        return res.send("an error occured");
      }
      const arrayOfNotes = JSON.parse(data);
      res.json(arrayOfNotes);
    });
  });
  app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      const arrayOfNotes = JSON.parse(data);
      arrayOfNotes.push(req.body);
      arrayOfNotes.map((obj, i) => (obj.id = ++i));
      fs.writeFile("./db/db.json", JSON.stringify(arrayOfNotes), (err) => {
        if (!err) {
          console.log("worked");
        }
        res.json(arrayOfNotes);
      });
    });
  });
  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        return res.send("an error occured");
      }
      const arrayOfNotes = JSON.parse(data);
      const deleteNotes = arrayOfNotes.filter(
        (user) => user.id != req.params.id
      );
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(deleteNotes),
        "utf8",
        (err, data) => {
          if (err) {
            return res.send("an error occured");
          }
          res.json(arrayOfNotes);
        }
      );
    });
  });
};
