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

let baseUrl = "https://quiet-springs-47127.herokuapp.com/productServer";

let axios = require("axios");
app.get("/myServer/customers", function(req,res){
    axios.get(baseUrl + "/customers")
    .then(function(response){
        console.log(response);
        res.send(response.data)
    })
    .catch(function (err){
        if(err.response) {
            let { status,statusText} = err.response;
            console.log(err);
            console.log(status, statusText);
            res.status(status).send(statusText);
        }
        else{
            res.status(404).send(err);
        }
    });
});


app.get("/myServer/products",function(req,res){
    axios.get(baseUrl + "/products")
    .then(function (response){
        console.log(response.data);
        res.send(response.data);
    })
    .catch(function(err){
        if(err.response){
            let { status,statusText} = err.response;
            console.log(err);
            console.log(status, statusText);
            res.status(status).send(statusText);
        }
        else res.status(404).send(err);
    });
});

// app.get("/myServer/orders",function(req,res){
//     axios.get(baseUrl + "/orders")
//     .then(function (response){
//         console.log(response.data);
//         res.send(response.data);
//     })
//     .catch(function(err){
//         if(err.response){
//             let { status,statusText} = err.response;
//             console.log(err);
//             console.log(status, statusText);
//             res.status(status).send(statusText);
//         }
//         else res.status(404).send(err);
//     });
// });




// 1b task

app.get("/myserver/orders",function(req,res){
    let {cust, prod} = req.query;
    let params = {};
    if(cust) params.cust = cust;
    if(prod) params.prod = prod;

    axios.get(baseUrl + "/orders",{params: params})
    .then(function (response){
        console.log(response.data);
        res.send(response.data);
    })
    .catch(function(err){
        if(err.response){
            let { status,statusText} = err.response;
            console.log(err);
            console.log(status, statusText);
            res.status(status).send(statusText);
        }
        else res.status(404).send(err);
    });
});


app.get("/myserver/orders/customer/:cust",function(req,res){
    let {cust} = req.params;
    axios.get(`${baseUrl}/orders/customer/${cust}`)
    .then(function (response){
        console.log(response.data);
        res.send(response.data);
    })
    .catch(function(err){
        if(err.response){
            let { status,statusText} = err.response;
            console.log(err);
            console.log(status, statusText);
            res.status(status).send(statusText);
        }
        else res.status(404).send(err);
    });
});



app.get("/myserver/orders/product/:prod",function(req,res){
    let {prod} = req.params;
    console.log(prod)
    axios.get(`${baseUrl}/orders/product/${prod}`)
    .then(function (response){
        console.log(response.data);
        res.send(response.data);
    })
    .catch(function(err){
        if(err.response){
            let { status,statusText} = err.response;
            console.log(err);
            console.log(status, statusText);
            res.status(status).send(statusText);
        }
        else res.status(404).send(err);
    });
});


// POST

app.post("/myserver/orders", function(req, res){
    let body = req.body;
    // console.log("body",body)
    axios.post(baseUrl + "/orders",body)
    .then(function(response){
        console.log(response.data);
        res.send(response.data);
    }).catch(function(err){
        if(err.response){
            let { status,statusText} = err.response;
            console.log(status, statusText);
            res.status(status).send(statusText);
        }
        else res.status(404).send(err);
    });
})