/**
 * falsey value fallback
 * 
 * nullish coealscion
 * 
 * default values(ES2020)
 * 
 * 0, "" ,  false , undefined , null    
 */

 let result = false;
 let congratulation = result || " u r best"; // fall back 

 console.log(congratulation);
 
 let result1 = undefined;
 let congratulation1 = result1 || " u r best"; // fall back 

 console.log(congratulation1);

 let result3 = 100;
 let congratulation3 = undefined || result3; // fall back 

 console.log(congratulation3+200);