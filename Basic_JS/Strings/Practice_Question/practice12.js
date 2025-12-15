
let str=('Welcome To Pune Hello Are UUIj');
let vowel='aeiouAEIOU';

let result="";

for(char of str)

  {
    if(vowel.includes(char))
    {
      if(char == char.toLowerCase())
      {
        result+=char.toUpperCase();
      }
      else{
        result+=char.toLowerCase();
      }
    }
    else {
      result+=char;
    }
  }
console.log(result);
