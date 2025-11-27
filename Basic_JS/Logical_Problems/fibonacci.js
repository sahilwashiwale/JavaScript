
/**
 * print => 0,1,1,2,3,5,8,13,21,34,55,89
 */

let num1 = 0;
let num2 = 1;
let sum = 0;
for(v=0;v<10;v++)
{
    console.log(num1);
    
    sum=num1+num2;
    num1=num2;
    num2=sum;
    
    
    
    
}