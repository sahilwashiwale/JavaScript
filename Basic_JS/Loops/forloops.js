/**
 * dont use the const in for loop to avoid assignment to constant variable
 * let => scope => nodblock level
 */

for(var i=0;i<100/2;i++)
{
    console.log(i);
    
}
console.log("logging outside");
console.log(i);

