
let str=('Anil Kapoor Bombay Pune');
let counter=0;
let arr=[];
let str4="";
let str2=str.split(" ");
console.log(str2);

str2.forEach((i)=>
{
    let ar2=i.split("");
    let ch=ar2[0];
    ar2[0]=ch.toLowerCase();
    console.log(ar2.join(''));
    str4=str4+ar2.join('');
    arr[counter]=ar2.join('');
    counter++;
    
}
)
console.log(arr.join(' '));



