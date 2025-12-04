

let arr=[1,7,3,9,6,4,2];
// direct modify original array
//arr.sort(desce);
// do not modify original array
let arr2 = arr.toSorted(desce)
// compairing function which is used to sort the element
function desce(a,b)
{
    if(a>b)// 1,7
    {
        return -1;
    }
    else if(a<b)
    {
        return 1;
    }
    else{
        return 0;
    }
}
console.log(arr);
console.log(arr2);
