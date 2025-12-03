/**
 * map is iterative method
 * works at the element level
 * it will keep the array length as it is
 * condition failed=> undefined array
 */

let arr=[182,23,4,6,6,7,7,5,4,3,2,2,3445,5,5,654];

 console.log(arr.map(check)); //keep the array length as it is
function check(i)
{
    if(i>15)
    {
    return i
}
}