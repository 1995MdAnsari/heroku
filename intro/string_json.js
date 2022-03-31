let fs = require("fs");
let readLine = require("readline-sync");
let fname = "data.json";
let courseData = {
    course: " Node.Js",
    students : [
        {name:"Jack",age:25},
        {name:"Steven", age:26},
        {name:"Anna",age:27},
    ],
};

function writeJson(){
    let str = JSON.stringify(courseData)
    fs.writeFile(fname,str,function(err){
        if(err) console.log(err)
    });
};

function enrollNewStudent(){
    let name= readLine.question("Enter name of Student");
    let age = readLine.question("Enter age");
    let newStudent = { name:name, age: age};
    fs.readFile(fname,"utf-8",function(err,data){
        if(err) console.log(err);
        else{
            console.log(data);
            let obj = JSON.parse(data); //  Convert the data obj to stiring
            obj.students.push(newStudent);
            let data1 = JSON.stringify(obj)
            fs.writeFile(fname,data1,function(err){
                if(err) console.log(err);
                else console.log("Data updated")
            });
        }
    });
}

function readJson(){
    fs.readFile(fname,"utf-8",function(err, data){
        if(err) console.log(err);
        else{
            let obj = JSON.parse(data);
            console.log(obj)
        }
    });
}

let option = readLine.question("Enter options 1:Write 2:Enroll new student 3:Read");
switch(option){
    case "1" : writeJson(); break;
    case "2" : enrollNewStudent();break;
    case "3" : readJson(); break;
}