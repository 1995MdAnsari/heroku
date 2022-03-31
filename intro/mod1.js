// define module ;

let name= "Jack";
let age=23;
let techs=["JS","Node","React"];

// module.exports.name = name;
// module.exports.age = age;
// module.exports.techs = techs;
// module.exports.hello = "hello";

// module.exports = { name:name, age:age, techs:techs, hello:"Hello"};


function knowsTechs(tech){
    console.log("In Function KnowsTech",tech);
    return techs.find((t1) => t1 == tech) ? true : false;
}

// module.exports = { name, age, techs, hello:"hello"};

// module.exports = { name, age, techs,knowsTechs};

module.exports.data = { name, age, techs};
module.exports.fun={knowsTechs};