

Demo();
// console.log(car,car2,);
function Demo()
{
    let car = "ms";  // not go outside from function
    const car2="scoda";  // not go outside from function
    var car3 = "bmw"; // not go outside from function
    console.log(car,car2,car3); //bcoz let var const is function scope
    
}
// console.log(car2); give ReferenceError: car2 is not defined
Demo();
