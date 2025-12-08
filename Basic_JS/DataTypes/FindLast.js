
let arr=[10,12,14,16,78,54,34];

function check(i)
{
    return i>60;
}
//Returns the value of the last element in the array where predicate is true, and undefined otherwise.
// if condition is not satisfied for last element then he check counting from last to start and print when condition satisfied on variable so print it;
console.log(arr.findLast(check));// 78 bcoz last<60 so check 2nd last n 3rd last n print 


// also print index of Findlast value
console.log(arr.findLastIndex(check));// 4 => give 78 value of index
