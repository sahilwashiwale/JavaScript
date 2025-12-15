
let str=('anil kapoor hello pune');

let arr=str.split(' ');
console.log(arr);



// function check(v)
// {
//     let upper=v.charAt(0).toUpperCase();
//     let remaining=v.slice(1);
//     return upper+remaining;
// }
 let arr3=[];
for (v of arr)
{
    let upper=v.charAt(0).toUpperCase();
    let remaining=v.slice(1);
    arr3=upper+remaining;
    console.log(arr3);
     
}
// console.log(arr3);
