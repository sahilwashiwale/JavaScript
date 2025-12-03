/**
 * for=> for of , for in 
 * forOf=> give me elements of array, for of is use to iterate over the elements
 * forIn=>give me index of array, for In is use to iterate over the indexes
 */

let arr = [10,293,393,45,33];

for(v of arr)
{
    console.log("of"+v);//of10 
                        //of293
                        //of393
                        //of45
                        //of33
    
}

for(v1 in arr)
{
    console.log("in"+v1);
    /**
     * in0
       in1
       in2
       in3
       in4
     */
    
}