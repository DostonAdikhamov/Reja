const http = require("http");
const mongodb = require("mongodb");
let db;
const connectionString = 
"mongodb+srv://adikhamov94_db_user:vFjFtAoKqahLnlkh@cluster0.kt8wgsb.mongodb.net/Reja"
mongodb.connect(
    connectionString, 
    { useNewUrlParser: true, 
    useUnifiedTopology: true
    }, 
    (err, client) => {
    if(err) console.log("ERROR on connection on MongoDB");
    else {
        console.log ("MongoDB connection succeed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3004;
        server.listen(PORT, function () {
         console.log(`Server http://localhost:${PORT} da muvaffatqiyatli ishlayapti`);
        });
    }
});

