const http = require("http");
const mongodb = require("mongodb");
const { log } = require("console");

let db;
const connectionString = "mongodb+srv://adikhamov94_db_user:eher6bJgBO4tOfT6@cluster0.kt8wgsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    }, 
    (err, client) => {
    if(err) console.log("ERROR on connection on MongoDB");
    else {
        console.log ("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
         console.log(`Server http://localhost:${PORT} da muvaffatqiyatli ishlayapti`);
        });
    }
});

