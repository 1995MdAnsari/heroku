// use the module define in mod1.js

let xyz = require("./mod1.js");
// let {name,age,techs,hello} = require("./mod1.js");

console.log(xyz);
// console.log(xyz.knowsTechs("js"));
// console.log(xyz.knowsTechs("React"))

console.log(xyz.fun.knowsTechs("js"));