
/**
 * Array => collection of variables together or similar data types
 *          its dynamic=> not size fix
 *          its linear data structure
 * 
 * [] => array literal
 *  new array(1.2.3.4.5); // using array constructor to create the array object
 *  new array(5); // create with array length
 * 
 */

// let num = [1,2,3,4,5,6,7];
// console.log(num);

let num2 = new Array(1,3,4,5,"sahil",6,7,8);
num2[8]=10; // add index of 8 the 10 value
 console.log(num2);//[ 1, 3, 4, 5, 6, 7, 8, <1 empty item>, 10 ]
// console.log(num2[1]);
// console.log(num2[num2.length-2]);

/**
 * u initialize size first and then assign the value
 * dyanmically add posible
 */
let num3 = new Array(3);
num3[0]=23;
num3[1]=24;
num3[2]=25;
num3[3]=26;
num3[4]=27;

console.log(num3);
