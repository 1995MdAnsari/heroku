let express = require("express");
let app = express();

app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONs, PUT, PATCH, DELETE, HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Request-With,Content-Type,Access"
    );
    next();

});
const port=2410;
app.listen(port, () =>console.log(`Node app listening on port ${port}!`));

// importing data

let {studentData} = require("./studentData.js")

// Query Parameter

app.get("/svr/students", function (req, res){
    console.log("GET /svr/students", req.query);
    let course = req.query.course;
    let arr2 = studentData;
    if(course) arr2 = studentData.filter((st) =>st.course===course)
    res.send(arr2)
});

// multiple query eg


app.get("/svr/students", function (req, res){
    console.log("GET /svr/students", req.query);
    let courseStr = req.query.course;
    let arr2 = studentData;
    if(courseStr){
        let courseArr = courseStr.split(",");
        arr2 = studentData.filter((st) =>courseArr.find((c1)=>c1 === st.course));
    }
    res.send(arr2)
});

app.get("/svr/students", function (req, res){
    console.log("GET /svr/students", req.query);
    let courseStr = req.query.course;
    let grade = req.query.grade;
    let arr2 = studentData;
    if(courseStr){
        let courseArr = courseStr.split(",");
        arr2 = studentData.filter((st) =>courseArr.find((c1)=>c1 === st.course));
    }

    if(grade) {
        arr2=arr2.filter((st) =>st.grade === grade)
    }
    res.send(arr2)
});


// for the sort query 

app.get("/svr/students", function (req, res){
    console.log("GET /svr/students", req.query);
    let courseStr = req.query.course;
    let grade = req.query.grade;
    let sort = req.query.sort;
    let arr2 = studentData;
    if(courseStr){
        let courseArr = courseStr.split(",");
        arr2 = studentData.filter((st) =>courseArr.find((c1)=>c1 === st.course));
    }

    if(grade) {
        arr2=arr2.filter((st) =>st.grade === grade)
    }

    if(sort=="name"){
        arr2.sort((st1,st2)=>st1.name.localeCompare(st2.name))
    }
    if(sort=="course"){
        arr2.sort((st1,st2)=>st1.course.localeCompare(st2.course))
    }
    res.send(arr2)
});



// app.get("/sev/test", function (req, res){
//     res.send("Test Response1234")
// });


app.get("/svr/students", function (req, res){
    res.send(studentData)
});


// Router parameter
app.get("/svr/students/:id", function (req, res){
    let id = +req.params.id; // convert id into integer
    let student = studentData.find((st) => st.id===id);

    // handle error
    if(student) res.send(student);
    else res.status(404).send("No student found");
});

app.get("/svr/students/course/:name", function(req,res){
    let name = req.params.name;
    const arr1 = studentData.filter((st) => st.course === name);
    res.send(arr1)
})