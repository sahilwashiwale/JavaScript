
let str=('Anil Kapoor Pune');

let str2=str.split(' ');
console.log(str2);

for(i=0;i<str2.length;i++)
{
    let word=str2[i];
    str2[i]=word.charAt(0).toLowerCase()+word.slice(1);
    
    
}
let result=str2.join(' ');
console.log(result);
