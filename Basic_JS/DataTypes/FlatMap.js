let arr=[10,20,[30,40],50];

// let arr2=arr.map((i)=>{ return i*2});
// console.log(arr2);// [ 20, 40, NaN, 100, 120 ]

let arr2 = arr.flat(1).map((i)=>{ return i*2});
console.log(arr2); //[ 20, 40, 60, 80, 100 ]

//OR not using seperate flat and map so using =>

let num=[10,20,30];
let num1 = num.flatMap((i)=>{return [i*2]});
console.log(num1);

