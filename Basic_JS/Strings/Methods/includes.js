
let str=("i am the best student");

// .includes() => its searching operation. index is include. 
// return boolean value when true if searchString appears as a substring
//  otherwise false

console.log(str.includes('b',10)); // false 
//                        check 'b' is present or not from 10 to onwords indices
//                        n '10' is start index.  

console.log(str.includes("iamthebeststudent"));// false 
//                                         bcoz it not give space of each word

console.log(str.includes('s',14)); // true bcoz s present 14 to onwords indices
