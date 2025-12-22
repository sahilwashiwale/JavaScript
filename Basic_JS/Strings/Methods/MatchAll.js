
let str=('i Am p22324une I am242 pune PunE i24214 Am aM p434213unE ');

//matchAll()=>used to give to a => iteartor=> for-of use for getting the objects
    //                                             from the iterator
// always use 'g'(global)operator compulsory

for(v of str.matchAll(/am/ig)) // compulsory use g otherwise give error
{
    console.log(v);
    /**
     * [
  'Am',
  index: 2,
  input: 'i Am p22324une I am242 pune PunE i24214 Am aM p434213unE ',
  groups: undefined
]
[
  'am',
  index: 17,
  input: 'i Am p22324une I am242 pune PunE i24214 Am aM p434213unE ',
  groups: undefined
]
[
  'Am',
  index: 40,
  input: 'i Am p22324une I am242 pune PunE i24214 Am aM p434213unE ',
  groups: undefined
]
[
  'aM',
  index: 43,
  input: 'i Am p22324une I am242 pune PunE i24214 Am aM p434213unE ',
  groups: undefined
]
     */
    
}