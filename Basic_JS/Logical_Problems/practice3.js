let arr=[13,11,17,19,20,12,11,12,1,34,1,45,71];
// find prime numbers from the array 
// and write in new array[]
let ans=[];

for(i=0;i<arr.length;i++)
{
    let flag=false;
    let num=arr[i];
    if(num<2)
    {
        continue;
    }
    for(j=2;j<num/2;j++)
    {
        if(num%j==0)
        {
            flag=true;
            break;
        }
    }
    if(!flag)
    {
    ans.push(num)
}
}
console.log(ans);

