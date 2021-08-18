const module_fs = require("fs");
const module_express = require("express");
const port = 3000;

app.listen(port, "127.0.0.1", () => {
    console.log(`Listening on port ${ port }`);
});

app.get("/:category", (req, res) => {
    res.send(module_fs.readFileSync("index.html", 'utf8'));
});