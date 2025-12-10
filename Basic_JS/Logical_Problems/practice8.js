
let arr=[4,121,36,32,11,93,22,312,234];
//find Square of number present in this array 
function check(num)
{
    let ans=0;
    for(i=0;i<num;i++)
    {
        ans=i*i;
        if(ans==num)
        {
            return true;
        }
    }
     return false;
}
let arr2 = arr.filter(check);
console.log(arr2);

