//1.Anonynous function printOddNumbers
var printOddNumbers = function (a) {
    for (let i of a)
        if (i % 2 != 0)
            console.log(i);
}
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    //IIF printOddNumbers
    (function (a) {
        for (let i of a)
            if (i % 2 != 0)
                console.log(i);
    })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


//2.Anonynous function caps in a string array
var caps = function (s) {
    let a = s.split(" ");
    for (let i = 0; i < a.length; i++)
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    a = [(a.join(" "))];
    console.log(a)
}
caps("welcome guvi zen class")
    //IIF caps in a string array
    (function (s) {
        let a = s.split(" ");
        for (let i = 0; i < a.length; i++)
            a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
        a = [(a.join(" "))];
        console.log(a);
    })("welcome guvi zen class")


//3.Anonynous function sum of array
var sumOfArray = function (a) {
    let sum = 0;
    for (let i of a)
        sum += i;
    console.log(sum);
}
sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    //IIF sum of array
    (function (a) {
        let sum = 0;
        for (let i of a)
            sum += i;
        console.log(sum);
    })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//4.Anonynous function prime numbers
var primeNumbers = function (a) {
    var b=[]
    a.forEach((num) => {
        for (let i = 2; i < num; i++)
            if (num % i == 0)
               return false
        b.push(num)
        
    })
    console.log(b)
}
primeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10])
  //IIf prime numbers
  (function(a){
    var b=[]
    a.forEach((num) => {
        for (let i = 2; i < num; i++)
            if (num % i == 0)
               return false
        b.push(num)
        
    })
    console.log(b)
   })([2, 3, 4, 5, 6, 7, 8, 9, 10])


//5.Anonynous function palindromeNumber
var palindromeNumber = function (a) {
    var d = [];
    a.forEach((str) => {
        let b = str;
        let c = str.split("").reverse().join("")
        if (b == c)
            d.push(c);
        else
            return c;
    })
    console.log(d);
}
palindromeNumber(['level', 'did', '121', 'sakthi', 'vel', '123321'])
    //IIF palindromeNumber
    (function (a) {
        var d = [];
        a.forEach((str) => {
            let b = str;
            let c = str.split("").reverse().join("")
            if (b == c)
                d.push(c);
            else
                return c;
        })
        console.log(d);
    })(['level', 'did', '121', 'sakthi', 'vel', '123321'])

//6.Median of two sorted arrays of the same size Anonynous function
var ar1 = [1, 12, 5, 26, 38];
var ar2 = [2, 1, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
var n = n1;
var s = (function () {
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++) {
        if (i == n) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }

        if (ar1[i] <= ar2[j]) {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }


    console.log((m1 + m2) / 2)
})
console.log((ar1, ar2, n1))

//Output--->11

//Median of two sorted arrays of the same size IIF
var ar1 = [1, 12, 5, 26, 38];
var ar2 = [2, 1, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
var n = n1;
(function () {
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++) {
        if (i == n) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }

        if (ar1[i] <= ar2[j]) {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }


    console.log((m1 + m2) / 2)
})(ar1, ar2, n1)



//7.Remove duplicates from an array Anonynous function
let duplicates = function (chars) {
    let result = chars.filter((a, b) => chars.indexOf(a) == b);
    console.log(result);
}
duplicates(['A', 'B', 'B', "1", "3", 'C', 'B', "3"]);
//IIF
(function (chars) {
    let result = chars.filter((a, b) => chars.indexOf(a) == b);
    console.log(result);
})(['A', 'B', 'B', "1", "3", 'C', 'B', "3"]);


//8.Rotate an array by k times Anonynous function
let rotate = function (k) {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let num = array.splice(0, k);
    array.push(num);
    console.log(array.toString());
}
rotate(4);
//IIF
(function (k) {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let num = array.splice(0, k);
    array.push(num);
    console.log(array.toString());
})(4);


//////Arrow Functions\\\\\\
//1.printOddNumbers
var printOddNumbers = (a) => {
    for (let i of a)
        if (i % 2 != 0)
            console.log(i);
}
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//2.Function caps in a string array
let caps = (s) => {
    let a = s.split(" ");
    for (let i = 0; i < a.length; i++)
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    a = [(a.join(" "))];
    console.log(a)
}
caps("welcome guvi zen class")

//3.Sum of array
var sumOfArray = (a) => {
    let sum = 0;
    for (let i of a)
        sum += i;
    console.log(sum);
}
sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//4.prime numbers
var primeNumbers = (a) => {
    var b=[]
    a.forEach((num) => {
        for (let i = 2; i < num; i++)
            if (num % i == 0)
               return false
        b.push(num)
        
    })
    console.log(b)
}
primeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10])

//5.palindromeNumber
var palindromeNumber = (a) => {
    var d = [];
    a.forEach((str) => {
        let b = str;
        let c = str.split("").reverse().join("")
        if (b == c)
            d.push(c);
        else
            return c;
    })
    console.log(d);
}
palindromeNumber(['level', 'did', '121', 'sakthi', 'vel', '123321'])
