let fs = require("fs");
let readline = require("readline-sync");

let txt = readline.question("Enter the text to be appended: ");
let fname = readline.question("Enter name of the file : ");

async function exer(filename,data){
    try{
        await fs.promises.access(filename,data);
        try{
            let data1 = await fs.promises.readFile(filename,"utf-8");
            console.log("Before :: ",data1);
            await fs.promises.appendFile(filename,data);
            let data2 = await fs.promises.readFile(filename,"utf-8");
            console.log("After :: ", data2);
        }
        catch (err){
            console.log(err);
        }
    }
    catch(err){
        await fs.promises.writeFile(filename,data);
        console.log("Write Success");
        let data3 = await fs.promises.readFile(filename,"utf-8");
        console.log("new File data : ",data3)
    }
}
exer(fname,txt);