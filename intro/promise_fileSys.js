let fs = require("fs");

let fname = "hello.txt";
fs.promises.readFile(fname,"utf-8")
    .then((result) => console.log(result))
    .catch((err)=> console.log("Got an errors"));


// fs.promises.writeFile(fname,"utf-8")
//     .then(() => console.log("Write is done"))
//     .catch((err)=> console.log("Got an errors"));
