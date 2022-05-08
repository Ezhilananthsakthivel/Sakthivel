//for
var studentDetails = `[
  {"name":"Sakthivel","gender":"Male","phone no":"9087345799"},
  {"name":"Jagathish","gender":"Male","phone no":"9080454718"},
  {"name":"Karthick","gender":"Male","phone no":"7845858588"}
]`

var json_sd = JSON.parse(studentDetails);
for(var i=0;i<json_sd.length;i++)
console.log(json_sd[i]);

//Forin
var studentDetails = '{"name":"Sakthivel","gender":"Male","phone no":"9087345799"}'
var json_sd = JSON.parse(studentDetails);
for(var i in json_sd)
console.log(i);

//forof
var studentDetails =  `[
     {"name":"Sakthivel","gender":"Male","phone no":"9087345799"},
     {"name":"Jagathish","gender":"Male","phone no":"9080454718"},
     {"name":"Karthick","gender":"Male","phone no":"7845858588"}
   ]`
var json_sd = JSON.parse(studentDetails);
for(var i of json_sd)
console.log(i);


//forEach
var studentDetails =  `[
     {"name":"Sakthivel","gender":"Male","phone no":"9087345799"},
     {"name":"Jagathish","gender":"Male","phone no":"9080454718"},
     {"name":"Karthick","gender":"Male","phone no":"7845858588"}
   ]`
var json_sd = JSON.parse(studentDetails);
json_sd.forEach(function(value,index){
  console.log(index+" "+JSON.stringify(value))
});
