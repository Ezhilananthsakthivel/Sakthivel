//Compare two JSON have the same properties without order

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var isEqual = (obj1,obj2)=>{
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    //return true when the two json has same length and all the properties has same value key by key
    return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}
console.log(isEqual(obj1,obj2));
