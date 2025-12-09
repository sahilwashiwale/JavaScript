let arr=[13,11,17,19,20,12,11,12,1,34,1,45,71];
// find prime numbers from the array 
// and write in new array[]
let ans=[];
for( v of arr){
    let flag=false;
 if(v<2)
    {
        continue;
    }
    for(i=2;i<v/2;i++)
    {
        if(v%i==0)
        {
            flag=true;
            break;
        }
    }
    if(!flag)
    {
 ans.push(v)
}
}
console.log(ans);
