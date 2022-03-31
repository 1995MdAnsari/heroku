let person = [
    {name:"Bob", age:24},
    {name:"Anna", age:25},
    {name:"Smith", age:26},
];
person.push({name:"Kathy", age:23})
let names="Smith";
let findName=person.find((num)=>num.name===names)

console.log(findName)