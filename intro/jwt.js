const express = require("express");
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

// calling middleware
// app.use("/myOrders",middlewareAuthentication)
const port=2410;
app.listen(port, () =>console.log(`Node app listening on port ${port}!`));

// using the cookies
const cookiesParser = require("cookie-parser");
app.use(cookiesParser());
app.use("/myOrders",middlewareAuthentication); // using middleware



const jwt  = require("jsonwebtoken");
const jwt_key = "secretkey237483"; // set the secret key
const jwtExpiryTime = 300;         // set the expiry time of token
let {users,orders} = require("./jwtData.js");

let cookieName = "jwtToken";

// using the middleware authentication intead get mathod

function middlewareAuthentication(req,res,next){
    // const token = req.headers["authorization"]; // getting the jwt from the header
    // console.log("Middleware Authentications")

    const token = req.cookies[cookieName] // getting the token name using cookies

    console.log("Token : ",token);
    if(!token) res.status(401).send("Pleas login first");
    else{
        jwt.verify(token,jwt_key,function(err,data){
            if(err){
                res.status(403).send(err);
            }
            else{
                console.log(data);
                req.user = data.user;
                next();
            }
        });
    }
}


// let {users,orders} = require("./jwtData.js");

app.post("/login", function(req, res){
    let {username, password} = req.body;
    let user = users.find((u) =>u.name === username && u.password ===password);
    if(user){

        // Generating the tokens as token as user
        const token = jwt.sign({user},jwt_key,{
            algorithm: "HS256", expiresIn: jwtExpiryTime
        });
        res.cookie(cookieName, token); // using the cookies 
        res.send("Login success")

        // res.send(token);
    }
    else{
        res.status(401).send("Login failed");
    }
});



// sending the user order data

// app.get("/myOrders", function(req,res){
//     const token = req.headers["authorization"]; // getting the jwt from the header
//     console.log("Token : ",token);
//     if(!token) res.status(401).send("Pleas login first");
//     else{
//         jwt.verify(token,jwt_key,function(err,data){
//             if(err){
//                 res.status(403).send(err);
//             }
//             else{
//                 console.log(data)
//                 let orders1 = orders.filter((ord) =>ord.userId === data.user.id);
//                 res.send(orders1)
//             }
//         })
//     }
// });


//  using the middleware functions

// app.get("/myOrders", function(req,res){
//     let orders1 = orders.filter((ord) =>ord.userId === req.user.id);
//     res.send(orders1)
// });


// Authenticate the JWT as route handler by calling the functions

// app.get("/myOrders",middlewareAuthentication, function(req,res){
//     console.log("In GET request /myOrders");
//     let orders1 = orders.filter((ord) =>ord.userId === req.user.id);
//     res.send(orders1)
// });

// handle by middleware
app.get("/myOrders", function(req,res){
    console.log("In GET request /myOrders");
    let orders1 = orders.filter((ord) =>ord.userId === req.user.id);
    res.send(orders1)
});


// without checking the JWT token

app.get("/info", function(req, res){
    res.send("Hello. Welcome to the tutorials");
});