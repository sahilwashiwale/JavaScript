
let letters = ['a','z','e','o','l',''];
let vowel = ['a','e','i','o','u'];

for(i=0;i<letters.length;i++)
{
    if(vowel.includes(letters[i]))
    {
        console.log(i);
        
    }
}
// OR

//  let letters = ['a','z','e','o','l',''];
//  let vowel = ['a','e','i','o','u'];
 
//  for(i=0;i<letters.length;i++)
//  {
//    for(j=0;j<vowel.length;j++)
//    {
//     if(letters[i]==vowel[j])
//     {
//         console.log(i);
        
//     }
//    }
//  }