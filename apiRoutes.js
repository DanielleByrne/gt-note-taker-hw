// var notes = require("./server");
const express = require("express");
const path = require("path");
const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes",  (req, res)=> {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        return res.send("an error occured");
      }
      const arrayOfNotes = JSON.parse(data);
      res.json(arrayOfNotes);
    });
  });
};

