let fs = require("fs");


function getStat(filename){
    console.log("stat : ", filename);
    fs.promises.stat(filename)
    .then(function (result) {console.log(result)})
    .catch((err) => console.log(err))
};


function checkAccess(filename){
    console.log("access : ", filename);
    fs.promises.access(filename).then(()=>console.log("Exists"))
    .catch((err) =>console.log("Does not exists"))
}


function readFiles(filename){
    console.log("Read file : " ,filename);
    fs.promises.readFile(filename,"utf-8")
    .then((content)=>console.log("Files data are : ",content))
    .catch((err) =>console.log(err))
}


function writeFilees(filename,data){
    console.log("Write files : ", filename);
    fs.promises.writeFile(filename,data)
    .catch((err) => console.log(err));
};


function appendFile(filename,data){
    console.log("Append files files : ", filename);
    fs.promises.appendFile(filename,data)
    .catch((err) => console.log(err));
}

let fname = "hello.txt";
//  getStat(fname);
// checkAccess(fname);
readFiles(fname);
// writeFilees(fname, "xyx");
// appendFile(fname, "hello append");