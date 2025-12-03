 
 let arr=[10,21,11,23,5,6,7,8,8,9,87,643,2345,6789,87654,345,678,76,543];

 arr.forEach(checkeven);
 function checkeven(i)
 {
    if(i%2==0)
    {
        console.log(i+"even");
        
    }
    else{
        console.log("odd"+i);
        
    }
 }