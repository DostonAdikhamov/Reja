console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs");

// MongoDB connection
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log('Error:', err);
    } else {
        user = JSON.parse(data);
    }
});

// 1Kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 Session codelari
// 3 Views codelari
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing codelari
app.post("/create-item", (req, res) => {
    console.log("user kirdi /create-item");
    console.log(req.body);
    const yangi_reja = req.body.reja;
    db.collection("plans").insertOne({reja: yangi_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("Xatolik yuz berdi");
        }
        else {
            res.end("Muvaffaqqiyatli qo'shildi");
        }
    });
});

app.get('/', function (req, res) {
    console.log("user kirdi /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            req.end("something went wrong");
        }
        else {
            console.log(data);
            res.render("reja", { items: data }); 
        }
    });
});

app.get('/author', (req, res) => {
    res.render("author", {user: user});
});

module.exports = app;
