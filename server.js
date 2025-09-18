console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

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
    console.log(req.body);
    res.json({ test: "success" });
});

app.get('/', function (req, res) {
    res.render("harid");
});

app.get('/author', (req, res) => {
    res.render("author", {user: user});
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function (){
    console.log(`Server ${PORT}da muvaffatqiyatli ishlayapti`);
});
