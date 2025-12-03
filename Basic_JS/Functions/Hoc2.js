
// hoc(higher order components)=> a function that/which takes another function as a parameter
function demo(a,b,c,opreation)
{
    return opreation(a,b,c); 
}
 
// function demo2(a,b,c)
// {
//     return a+b+c;
// }

console.log(
    demo(12,12,12,(a,b,c)=>{return a+b+c})); // anonymous arrow function

