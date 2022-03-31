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


async function writeJson()
{
    try
    {
        let str = JSON.stringify(courseData);
        await fs.promises.writeFile(fname,str);
        console.log("Write JSON");
    }
    catch(err)
    {
        console.log(err)
    }
}

async function enrollsNewStudent(){
    let name = readLine.question("Enter age of student");
    let age = readLine.question("Enter age");
    let newStudent = {name: name, age:+age};
    try
    {

        let data1 = await fs.promises.readFile(fname,"utf-8");
        let obj = JSON.parse(data1);
        obj.students.push(newStudent);
        let data2 = JSON.stringify(obj);
        await fs.promises.writeFile(fname,data2);
        console.log("Student enroled");

    }
    catch(err)
    {
        console.log(err);
    }
}

async function readJson(){
    try
    {
        let data = await fs.promises.readFile(fname,"utf-8");
        console.log("In string format",data);
        let obj = JSON.parse(data);
        console.log(obj);
    }
    catch(err)
    {
        console.log(err)
    }
}

let options  = readLine.question("Enter options 1:Write 2:Enroll 3:Read - ");

switch(options){
    case "1" : writeJson();break;
    case "2" : enrollsNewStudent(); break;
    case "3" : readJson(); break;
}