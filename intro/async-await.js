let fs = require("fs");
async function readFiles(filename){
    try{
        let data =  await fs.promises.readFile(fname,"utf-8");
        console.log(data);
    
    }
    catch(err){
        console.log(err)
    }
}

async function textWrite(fname,txt){
    try{
        await fs.promises.writeFile(fname,txt);
        console.log("Write Success");
    }
    catch(err){
        console.log(err)
    }
}
async function getStat(fname){
    try{
        let status = await fs.promises.stat(fname);
        console.log(status);
    }
    catch(err){
        console.log(err)
    }
}

async function getAccess(fname){
    try{
        await fs.promises.access(fname);
        console.log("File exists");
    }
    catch(err){
        console.log(err)
    }
}

async function appendFiles(fname, txt){
    try{
        await fs.promises.appendFile(fname, txt);
        console.log("Append success");
    }
    catch(err){
        console.log(err)
    }
}

let fname = "hello.txt";
// textWrite(fname,"wtttttt");
readFiles(fname);
// getStat(fname);
// getAccess(fname);
appendFiles(fname, "txt")

