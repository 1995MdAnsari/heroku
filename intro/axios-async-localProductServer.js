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

let  axios = require("axios"); 


app.get("/myserver/customers",async function(req,res){
    try{
        let response = await axios.get(baseUrl + "/customers");
        console.log(response.data);
        res.send(response.data);
    }
    catch(err){
        if(err.response){
            let {status, statusText} = err.response;
            console.log(status,statusText);
            res.status(status).send(statusText)
        }
        else{
            res.status(404).send(err)
        }
    }
});


app.get("/myserver/products",async function(req,res){
    try{
        let response = await axios.get(baseUrl + "/products");
        console.log(response.data);
        res.send(response.data);
    }
    catch(err){
        if(err.response){
            let {status, statusText} = err.response;
            console.log(status,statusText);
            res.status(status).send(statusText)
        }
        else{
            res.status(404).send(err)
        }
    }
});


app.get("/myserver/orders",async function(req,res){
    try{
        let response = await axios.get(baseUrl + "/orders");
        console.log(response.data);
        res.send(response.data);
    }
    catch(err){
        if(err.response){
            let {status, statusText} = err.response;
            console.log("Errors:: ",status,statusText);
            res.status(status).send(statusText)
        }
        else{
            res.status(404).send(err)
        }
    }
});



// Query string
app.get("/myserver/orders/customers/:cust",async function(req,res){
    try{

        let {cust} = req.params
        let response = await axios.get(`${baseUrl}/orders/customers/${cust}`);
        console.log(response.data);
        res.send(response.data);
    }
    catch(err){
        if(err.response){
            let {status, statusText} = err.response;
            console.log(status,statusText);
            res.status(status).send(statusText)
        }
        else{
            res.status(404).send(err)
        }
    }
});

app.get("/myserver/orders/products/:prod",async function(req,res){
    try{
        let {prod} = req.params
        let response = await axios.get(`${baseUrl}/orders/customers/${prod}`);
        console.log(response.data);
        res.send(response.data);
    }
    catch(err){
        if(err.response){
            let {status, statusText} = err.response;
            console.log(status,statusText);
            res.status(status).send(statusText)
        }
        else{
            res.status(404).send(err)
        }
    }
});


app.get("/myserver/orders", async function(req,res){
    let {cust,prod} = req.query;
    let params = {};
    if(cust) params.cust = cust;
    if(prod) params.prod = prod;
    try
    {
        let response = await axios.get(baseUrl + "/orders", { params : params });
        console.log(response.data);
        res.send(response.data);
    }
    catch(err)
    {
        if(err.response)
        {
            let {status, statusText} = err.response;
            console.log( "Error :: ",status,statusText);
            res.status(status).send(statusText)
        }
        else
        {
            res.status(404).send(err)
        }
    }
});


app.post("/myserver/orders", async function(req,res){
    let {cust,prod} = req.query;
    try
    {   
        let body = req.body;
        let response = await axios.post(baseUrl + "/orders",body);
        console.log(response.data);
        res.send(response.data);
    }
    catch(err)
    {
        if(err.response)
        {
            let {status, statusText} = err.response;
            console.log( "Error :: ",status,statusText);
            res.status(status).send(statusText)
        }
        else
        {
            res.status(404).send(err)
        }
    }
});