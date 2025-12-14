// count how many time each character comes

let str=("mississippi");
let count=0;
let maxcount=0;
let maxchar='';

for(i=0;i<str.length;i++)
{
    if(str.charAt(i)==str.charAt(str.length-1-i))
    {
        count++;
    }
    if(count>maxcount)
    {
        maxcount=count;
        maxchar=str.charAt(i)
    }
}
// console.log(maxchar);

// remove duplicate elements

let str2=('banana');

let rep="";

for(i=0;i<str2.length;i++)
{
    if(!rep.includes(str2.charAt(i)))
    {
    rep+=str2.charAt(i);
    }

}
console.log(rep);

