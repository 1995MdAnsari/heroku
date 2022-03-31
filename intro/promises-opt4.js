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
    let data = JSON.stringify(courseData);
    fs.promises.writeFile(fname,data).then(() =>console.log("Write Success"))
    .catch((err) => console.log(err));
}

function enroleNewStudent(){
    let name = readLine.question("Enter name");
    let age = readLine.question("Enter age");
    let newStudent = { name:name, age:age };

    fs.promises.readFile(fname,"utf-8")
    .then((data) =>{
        let obj = JSON.parse(data);
        obj.students.push(newStudent);
        let data1 = JSON.stringify(obj);
        fs.promises.writeFile(fname,data1)
        .then(() => console.log("New Student Pushed")).catch((err) => console.log(err))
    })
    .catch((err) =>console.log(err));
}


function readJson() {
    fs.promises.readFile(fname,"utf-8")
    .then((data) =>{
        console.log("In string formate",data);
        let obj = JSON.parse(data) // convert the data into object formate
        console.log(obj)
    })
    .catch((err) => console.log(err))
}

let options  = readLine.question("Enter option 1:Write  2:Enroll Student 3:Read - ");
switch(options){
    case "1" : writeJson(); break;
    case "2" : enroleNewStudent(); break;
    case "3" : readJson(); break;
}