
let str=('banana');
let search='a';

let count=0;
let pos=str.indexOf(search);

while(pos !== -1)
{
    count++;
    pos=str.indexOf(search,pos+1);
}
//console.log(count);

// return the unicode of last char using codepointat()

let str2=('hello');
console.log(str2.codePointAt(str2.length-1));//111

