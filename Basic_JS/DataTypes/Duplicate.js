
let arr=[10,10,22,11,10,32,232,112,121,221,22,11,121];

let arr2=[];
for(v=0;v<arr.length;v++)
{
    let num=arr[v];
    let counter=0;
    
    for( w=0;w<arr.length;w++)
    {
        if(arr[w]==num)
        {
            counter++;
        }
    }
    if(counter>=2)
    {
        arr2[v]=arr[v];
        
    }
}
 //console.log(arr2);

 let arr3=arr.filter((i)=>{return i != undefined});

 for(let v=0;v<arr3.length;v++)
 {
    arr3.splice(v,1);

 }
 console.log("original",arr);
 console.log("duplicate",arr3);
 
 