console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs");

// MongoDB connection
const db = require("./server").db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log('Error:', err);
    } else {
        user = JSON.parse(data);
    }
});

// 1Kirish codelari
app.use(express.static("public")); // Middleware Design Pattern - public uchun ochiqlayapti
app.use(express.json());  // Middleware Design Pattern >
app.use(express.urlencoded({extended: true}));  // Middleware Design Pattern >

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
        console.log(data.ops);
        res.json(data.ops[0]);
});
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
        res.json({state: "Success"});
    })
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, {$set: {reja: data.new_input}}, function (err, data) {
        res.json({state: "Success"});
    })
    res.end("done");
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({state: "Hamma rejalar uhladi!" });
        });
    }
});

app.get('/', function (req, res) {
    console.log("user kirdi /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            req.end("Something went wrong");
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
