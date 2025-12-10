
// find maximum number in array
let arr=[5,6,73,2,122,4,21,8,76];

let max=[];

for(i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
console.log(max);
