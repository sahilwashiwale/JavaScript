
// find unique elements

let arr=[1,2,32,12,1,2,4,2,1,5,6,43,2,33,2,3,2,3,2,1,3,2,3,1,222,2,32,3,13,2,3,2];
let unique=[];

for(i=0;i<arr.length;i++)
{
    if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i]))
    {
        unique.push(arr[i]);
    }
}
console.log(unique);
