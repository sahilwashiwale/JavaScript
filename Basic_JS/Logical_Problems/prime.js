let num = 11;
let flag = false;
for(let i=2;i<num;i++)  // for(let i=2;i<num/2;i++)
{
    if(num%i==0)
    {
     flag = true;
    }
}
if(flag)
{
    console.log("not prime"+num);
    
}
else{
    console.log("prime"+num);
    
}