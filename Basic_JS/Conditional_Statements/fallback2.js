/**
 * falsey value fallback
 * 
 * nullish coealscion
 * 
 * default values(ES2020)
 * 
 * 0, "" ,  false , undefined , null    
 */

let marks = 0;
let result = marks || 100;
console.log(result);

let islogin = null;
let congrats = islogin || "u r not login";
console.log(congrats);
