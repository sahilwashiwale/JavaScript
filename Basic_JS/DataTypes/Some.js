 

 let arr = [55,98,16];
/**
 * some => true/false logical "OR" => even if the single element is passing the given condition
 * u will get the answer true
 * 
 */
 function greaterthan50(i)
 {
          return i>50;
 }

console.log(arr.some(greaterthan50));

/**
 * every => each element of given array must pass given condition 
 * it works logical "AND" n return value accordingly
 */

console.log(arr.every(greaterthan50));
