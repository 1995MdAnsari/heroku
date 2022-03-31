let express = require("express");
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
const port=2410;
app.listen(port, () =>console.log(`Node app listening on port ${port}!`));

let baseURL = "https://quiet-springs-47127.herokuapp.com/messageServer";


let axios = require("axios");

app.post("/myserver2/login", function(req,res){
    let body = req.body;
    axios.post(baseURL + "/login", body)
    .then((response) =>{
        console.log(response.data);
        res.send("",+response.data);
    })
    .catch(err =>{
        if(err.response){
            let {status, statusText} = err.response;
            console.log(status,statusText);
            res.status(status).send(statusText);
        }
        else{
            res.status(404).send(err);
        }
    });
});


app.post("/myserver2/messages", function(req,res){
    let token = req.header("authorization");
    if(!token) res.status(401).send("No token found");

    else{
        let body = res.body;
        axios.post(baseURL + "/messages",body,{headers :{authorization:token}})
        .then(function(response){
            console.log(response);
            res.send(response.data)
        })
        .catch(function (err){
            if(err.response) 
            {
                let { status,statusText} = err.response;
                console.log(status, statusText);
                res.status(status).send(statusText);
            }
            else
            {
                res.status(404).send(err);
            }
        });
    }
});