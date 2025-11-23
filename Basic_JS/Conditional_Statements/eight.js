function isprime()
{
    let num = 7;
    if(num<2){
        console.log("= not prime");
        return;
    }
   for(let i=2;i<num;i++)
   {
    if(num%i==0)
    {
        console.log("= not prime");
        return;
    }
   }
   console.log("is prime");
   
}

isprime();