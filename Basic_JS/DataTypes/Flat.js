
let arr=[1,2,[5,[7,[9,10],6],3],4]; 
// depth means in array how many array inside
// if u not have how many depth inside the array so use -=> infinity"
let arr2 = arr.flat(Infinity)
console.log(arr2);



//let arr2 = arr.flat(2)
/**
 * [
  1, 2, 5, 7,
  8, 6, 3, 4 
]
 */

//let arr3=arr.flat(1)//[ 1, 2, 5, [ 7, 8 ], 6, 3, 4 ]

//console.log(arr3);
