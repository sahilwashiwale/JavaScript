
let arr = ['a','b','c','d','e','f'];
   //       0 , 1 , 2 , 3 , 4 , 5
//a,b,c,a,b,c
let arr2 = arr.copyWithin(3,0,2); 
/**
 * target index 3=> array walk 0 to 2 n prnt a,b,c
 * start index 0=> array walk from 0
 * end index 2=> array walk to 1 not give 2 bcoz its excluded
 * so in 1st walk go a,b,c then 2nd walk a,b n remaining f 
 * n last print a,b,c,a,b,f 
 */

console.log(arr2);

