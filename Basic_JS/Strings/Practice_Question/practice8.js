// check if palindrome or not
let str=('madam');
let flag=false;

for(i=0;i<str.length;i++)
{
    if(str.charAt(i)==str.charAt(str.length-1-i))
    {
        flag=true;
    }
}
//console.log(flag);

// find first non repeating character

let str2=("makwam");
let ans=null;

for(i=0;i<str2.length;i++)
{
    if(str2.indexOf(str2[i])==str2.lastIndexOf(str2[i]))
    {
        ans=str2[i]
        break;
        
    }
}
console.log(ans);

