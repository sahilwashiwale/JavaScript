let arr=[13,11,17,19,20,12,11,12,1,34,1,45,71];
// find prime numbers from the array 
// and write in new array[]

function isprime(num)
{
    if(num<2)
    {
        return false;
    }
    for(i=2;i<num;i++)
    {
    if(num%i==0)
    {
        return false;
    }
   
    }
     return true;
} 
let arr2 = arr.filter(isprime);
console.log(arr2);
