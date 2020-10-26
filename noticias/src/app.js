const path = require("path");
const express = require("express");
const hbs = require("hbs");


const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewspath = path.join(__dirname,"../templates/views");

app.set("view engine", "hbs");
app.set("views", viewspath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res)=>{
    res.render("index")

});

app.get("/index", (req, res)=>{
    res.render("index")

});

app.get("/playstation", (req, res)=>{
    res.render("playstation")

});

app.get("/xbox", (req, res)=>{
    res.render("xbox")

});

app.get("/switch", (req, res)=>{
    res.render("switch")

});

app.get("/pc", (req, res)=>{
    res.render("pc")

});

app.get("/movil", (req, res)=>{
    res.render("movil")

});
app.get("/spiderman", (req, res)=>{
    res.render("spiderman")

});

app.get("/seriesS", (req, res)=>{
    res.render("seriesS")

});

app.get("/nintendo", (req, res)=>{
    res.render("nintendo")

});
app.get("/fallout", (req, res)=>{
    res.render("fallout")

});

app.get("/lenovo", (req, res)=>{
    res.render("lenovo")

});



app.listen(3000, ()=>{
     console.log("server is running on port 3000")

});


