let  fs = require("fs");
let readline = require("readline-sync");

// let fname = "hello.txt";
let fname = readline.question("Enter the file name");
let txt = readline.question("Enter the text to be appended to files: ");

// fs.promises.appendFile(fname,txt)
//  .then(()=>fs.promises.readFile(fname,"utf-8"))
//  .then((content) => console.log(content))
//  .catch((err) => console.log(err));

fs.promises.access(fname)
    .then(() =>fs.promises.readFile(fname,"utf-8")
        .then((content) =>{console.log("Before:: ",content);
        fs.promises.appendFile(fname,txt)
        .then(() =>
        {console.log("Append Success");
            fs.promises.readFile(fname,"utf-8")
                .then((content)=>console.log("After ::",content));
            });
         })
    .catch((err) => console.log(err))     
)
.catch((err) => fs.promises.writeFile(fname,txt)
    .then(() =>{
        console.log("Write Success");
        fs.promises.readFile(fname,"utf-8")
            .then((content) =>console.log(content));
    })
    .catch((err) => console.log(err))
)   