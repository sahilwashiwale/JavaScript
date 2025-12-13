
let str=('sahil washiwale');

//.charCodeAt() => Returns the Unicode value of the character 
//                 at the specified location
//                 not take negative index if index negative => NaN(not a number)

console.log(str.charCodeAt(-1));//NaN

console.log(str.charCodeAt(2));//104 => unicode value

