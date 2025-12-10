let arr=[64,512,101,121,513,1000];
//find cube of number present in this array 
function cube(num)
{
    let ans=0;
    for(i=0;i<num;i++)
    {
      ans=i*i*i;
    if(ans==num)
    {
        return true;
    }
}
    return false;
}
let arr2 = arr.filter(cube)
console.log(arr2);
