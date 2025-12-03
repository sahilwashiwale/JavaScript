/**
 * filter is used to filter out the elements/array n create new array
 * this is returning method 
 * 
 */

let arr=[10,20,30,70,22];

function check5(i)
{
    return (i%5==0)
}
//console.log(check5(13));
arr2=(arr.filter(check5));
console.log("original array"+arr);

console.log("filtered array"+arr2);

