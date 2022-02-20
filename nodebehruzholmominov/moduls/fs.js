const fs = require("fs");
const path = require("path");

//Folder yaratish
// fs.mkdir(path.join(__dirname, "papka"), {}, (err) => {
// if (err) throw err;
// console.log("Papkda yaratildi")
// }, );

// Fayl yaratish
// fs.writeFile(path.join(__dirname, "/papka", "example.txt"), "Node JS orqali yaratildi", err => {
// if (err) throw err;
// console.log("Fayl  yaratildi")
// }, );
// fs.appendFile(path.join(__dirname, "/papka", "example.txt"), "sdfsdfg", err => {
// if (err) throw err;
// console.log("Fayl  yaratildi")
// }, );
//Read File
fs.readFile(path.join(__dirname, "/papka", "example.txt"), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.rename(
    path.join(__dirname, "/papka", "example.txt"),
    path.join(__dirname, "/papka", "namuna.txt"),
    (err) => {
        if (err) throw err;
    });