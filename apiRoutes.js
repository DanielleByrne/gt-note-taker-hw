var notes = require("./server");
const fs = require("fs")

module.exports= function (app){
    app.get("/api/notes", function(req, res){
        fs.readFile("./db/db.json", "utf8", function(err, data){
            if (err) throw err;
            res.json(JSON.parse(data))
        });
    });
}