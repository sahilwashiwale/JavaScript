let str=('sahil washiwale');

//.codePointAt() => Returns the Unicode value of the character 
//                 at the specified location
//                 not take negative index if index negative => undefined

console.log(str.codePointAt(-1));//undefined

console.log(str.codePointAt(2));//104 => unicode value
