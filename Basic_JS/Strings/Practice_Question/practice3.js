
// let str=('apple');
// let vowel=('aeiou');
// let flag=false

//   for(i=0;i<str.length;i++)
//  {
//    for(j=0;j<vowel.length;j++)
//    {
//     if(str[i]==vowel[j])
//     {
        
//         flag=true;
//     }
//    }
//  }
//  console.log(flag);
 
 // using includes();

let str=('apple');
let str2=('sky')
let vowel=('aeiou');
let flag=false
for(i=0;i<str2.length;i++)
{
if(vowel.includes(str2[i]))
{
    flag = true;
}
}
console.log(flag);
