let num1 = 20;
let num2 = 70;

for(let i=num1+1;i<num2;i++)
    
{
    let flag = false;
   for(j=2;j<=21;j++)
   {
    if(i%j==0)
    {
        flag = true;
    }
   }


// if u print prime as well as not prime then use this

//    if(flag)
// {
//     console.log("not prime"+i);
    
// }
// else
// {
//      console.log("prime"+i);
// }


//when u print only prime numbers then use this

if(!flag)
{
    console.log("prime "+i);
    
}
    
}
