/**
 * 3 types of scope 
 * scope=> global , local , block level scope
 * 
 * let and const =>global , block , function level
 * 
 * var =>global , function
 * 
 */

if(true){
/**
 * block level scope
 */
let name = "ab";
const name2 = "cd";
var name3 = "ef";
console.log(name,name2);

}
console.log(name3);
