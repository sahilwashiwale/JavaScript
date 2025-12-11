
// let str=('anil kapoor pune');

// let str2=str.split(' ');

// console.log(str2);

// for(i=0;i<str2.length;i++)
// {
//     let word=str2[i];
//     str2[i]=word.charAt(0).toUpperCase()+word.slice(1);

// }
// let reult=str2.join(' ');
// console.log(reult);


// let str=('anil kapoor pune');

// let str2=str.split(' ');

// for(i=0;i<str2.length;i++)
// {
//     //let word=str2[i];
//     str2[i]=str2[i].slice(0,str2[i].length-1)+str2[i].charAt(str2[i].length-1).toUpperCase();
// }
// let ps=str2.join(' ');
// console.log(ps);

let str=('anil kapoor pune');
let str2=str.split(' ');
let result = [];
for(i=0;i<str2.length;i++)
{
    let rev="";
    let word=str2[i];
    for(j=str2[i].length-1;j>=0;j--)
    {
        rev += word[j];
    }
    result.push(rev);
}
console.log(result.join(' '));

