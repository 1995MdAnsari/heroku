let express = require("express");
const bodyParser = require("body-parser")
let mysql = require("mysql"); // Data base connections
let connData = {
    host:"localhost",
    user : "root",
    password:"",
    database:"quizdb"
};

let app = express();
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONs, PUT, PATCH, DELETE, HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Request-With,Content-Type,Access"
    );
    next();
});
app.listen(process.env.PORT || 3001, () =>console.log("Node app listening on port 3001"));

app.get(bodyParser.urlencoded({extended:true}));

app.post("/api/insert",(req,res) =>{
    // let pname = req.body.name;
    let countError = req.body.countError;
    let date = req.body.date;
    let time = req.body.time;
    let connection=mysql.createConnection(connData);
    
    let sql = "INSERT INTO quiz(countError,date,time) VALUES(?,?,?);"
    connection.query(sql,[countError,date,time],function(err,result){
        if(err) console.log("Error in database",err.message);
        else res.send(result);  
    });
});
