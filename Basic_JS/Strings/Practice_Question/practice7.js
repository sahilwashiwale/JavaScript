
//reverse string using only charat();
let str=('javascript');

let rev="";

for(i=str.length;i>=0;i--)
{
    rev+=str.charAt(i);
}
console.log(rev);
console.log("************************************************************S");


//count the vowels using includes

let str2=('education');
let counter=0;
let vowel='aeiou';

for(i=0;i<str2.length;i++)
{
    if(vowel.includes(str2.charAt(i)))
        counter++;
}
console.log(counter);
console.log("*******************************************************");


console.log(str2.charAt(0));
console.log(str2.charAt(1));
console.log(str2.charAt(2));
console.log(str2.charAt(3));
console.log(str2.charAt(4));
console.log(str2.charAt(5));
