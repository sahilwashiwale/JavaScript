// null VS undefined


var age;// whenever u declare variable but not assign value js bydefault give undefined
console.log(age);
// in js no vriable is null when u have not assgin manually 
var num = null;// whenever u declare variable n assign value as null do arith operation so null value convert in 0 and do 0+5=5
console.log(num+5);

var pi;// whenever u declare variable without assign value and print with arith operation it gives NaN(Not an number)
console.log(pi+5);

console.log(typeof(num));// the type of null is object 
console.log(typeof(pi));// the type of undefined is undefined

