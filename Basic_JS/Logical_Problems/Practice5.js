
let arr3=['a','c','f'];

// add missing characters using splice 

arr3.splice(1,0,'b');
arr3.splice(3,0,'d','e');
console.log(arr3);//[ 'a', 'b', 'c', 'd', 'e', 'f' ]
