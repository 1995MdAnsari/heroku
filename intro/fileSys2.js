let fs  = require("fs");
let readLine = require("readline-sync");

// let fname = "hello.txt"; 
let fname = readLine.question("Enter file name : "); // taking from user
let txt = readLine.question("Enter text to be appendded to file: ");

fs.access(fname, function(err){
    if (err) {
        // file does not exist write,read
        fs.writeFile(fname,txt,function(err){
            if(err) console.log(err);
            else{
                console.log("Write successful");
                fs.readFile(err,"utf-8",function(err,content){
                    if(err) console.log(err);
                    else console.log(content);
                });
            }
        });
    }
    else{
        // file exists then read,append,read 

        fs.readFile(fname,"utf-8", function(err,content){
            if (err) console.log(err);
            else{
                console.log("Befor :: ", content);
                fs.appendFile(fname,txt,function(err){
                    if(err) console.log(err);
                    else{
                        console.log("Append Successful");
                        fs.readFile(fname,"utf-8",function(err,content){
                            if(err) console.log(err);
                            else console.log("After append : ", content)
                        });
                    }
                });
            }
        });
    }
});

// fs.appendFile(fname,txt,function(err){
//     if(err) console.log(err);
//     else{
//         fs.readFile(fname,"utf-8",function(err,content){
//             if(err) console.log(err);
//             else console.log(content)
//         })
//     }
// })
