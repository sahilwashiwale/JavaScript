/**
 * ES2020 => features 
 */
add("sahil");
function add(v,v2)
{
    console.log("hii"+v+v2);//hiisahilundefined  
                            //hiiomaundefined
}
add("oma");
console.log("**********************************************************");
// default value in java script function
add2("sahil");
function add2(v="a",v2="b")
{
    console.log("hii"+v+v2);
    
}
add2("sai","tai")
add2();

console.log("**********************************************************");
// default value in java script function
add3(10); //NaN
function add3(a,b)
{
    console.log(a+b); 
    
}
add3(10,20)//30
add3(5,5);//10

console.log("**********************************************************");

add4(20);
function add4(c=0,d=0)
{
    console.log(c+d);
    
}
add4(20,30)
add4(5,5);