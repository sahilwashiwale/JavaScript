
let arr=[10,20,30,40,50];
// at(number)=> positive as well as negativ=> negative counts from back
console.log(arr.at(-1));

// .shift()=>Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// it is modify the original array / alse called modifying method
// 
console.log(arr.shift()); // 10=> remove first element  

console.log(arr);// [ 20, 30, 40, 50 ] => remaining element

//.unshift()=> Inserts new elements at the start of an array, and returns the new length of the array

//console.log(arr.unshift(5,6,7,"sahil"));// 9 => length 

//console.log(arr);//[5,6,7,'sahil',10,20,30,40,50]



