/**
 * nullish coealscion => null , undefined
 */

let marks; // null
let result = marks ?? "invalid";
console.log(result); // o/p=>invalid

let marks1=0; // 0
let result1 = marks1 ?? "invalid";
console.log(result1); // o/p=>0 bcoz it is not null or undefined