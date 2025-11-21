/**
 * nested loop => A loops within the loop is called 
 */
let marks=80;
let isadmissionconfirmed = false;
 if(isadmissionconfirmed)
 {
    if(marks>=50 && marks<=60)
    {
        console.log("Grade C");
    }
    else if(marks>60 && marks<=80)
    {
         console.log("Grade B");
    }
    else if(marks>80 && marks<=100)
    {
         console.log("Grade A");
    }
    else{
        console.log("Grade NO");
    }
 }
 else{
    console.log("take admmision first");
    
 }