let fs = require("fs");
let readline = require("readline-sync");

let txt = readline.question("Enter the text to be appended: ");
let fname = "hello.txt";

async function exer(filename,data){
    try{
        await fs.promises.appendFile(filename,data);
        console.log("Append Success");
        
        let data1 = await fs.promises.readFile(filename,"utf-8");
        console.log(data1);
    }
    catch(err){
        console.log(err);
    }
}
exer(fname,txt);