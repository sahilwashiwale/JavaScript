/**
 *if_else-if ladder
 *  age=>0 to 17 => u cannot vote
 * age=>18 to 30 => u can vote gracefully
 * age=>30 to 50 => u can vote carefully
 * age=>50 and above => u already vote
 */

 let age = 100;
 if(age>0 && age<=17)
 {
    console.log("u cannot vote");
 }
 else if(age>=18 && age<=30)
 {
    console.log("u can vote gracefuly");
 }
 else if(age>=31 && age<=50)
 {
    console.log("u can vote carefuly");
 }
 else
 {
    console.log("ur age is more ");
    
 }