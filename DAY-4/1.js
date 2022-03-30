//Compare two JSON have the same properties without order
//Install the lodash library using npm
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var _= require('lodash');
console.log(_.isEqual(obj1,obj2));
