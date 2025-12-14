//find position of 'a';

let str=('java programming');
let position =[];
let pos='a';
while(pos!=-1)
{
 position.push(pos);
 pos=str.indexOf('a',pos+1)
}
console.log(position);
 
// check if 2 string ends with same character

let a='hello';
let b='piano';

console.log(a.charAt(a.length-1)==b.charAt(b.length-1)); // true
// also using
console.log(a.at(-1)==b.at(-1))