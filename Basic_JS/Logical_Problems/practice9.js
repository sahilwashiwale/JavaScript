
// find longest string in array

let arr=['mango','apple','banana','pineapple','kiwi','strawberry'];
let highest = 0;

for(i=0;i<arr.length;i++)
{
    if(arr[i].length>highest.length)
    {
        highest=arr[i]
    }
}
console.log(highest);
