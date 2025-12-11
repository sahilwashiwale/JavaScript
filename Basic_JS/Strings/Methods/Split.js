
let str=('abcfwel-sde-ed-sefs -svsef-swfcew f-wef ');

//Split a string into substrings using the specified separator
// and return them as an array.
console.log(str.split('-'));
/**
 * [
  'abcfwel', 'sde',
  'ed',      'sefs ',
  'svsef',   'swfcew f',
  'wef '
]
 */
console.log(str.split());//[ 'abcfwel-sde-ed-sefs -svsef-swfcew f-wef ' ]
console.log(str.split(''));
/**
 * [
  'a', 'b', 'c', 'f', 'w', 'e', 'l',
  '-', 's', 'd', 'e', '-', 'e', 'd',
  '-', 's', 'e', 'f', 's', ' ', '-',
  's', 'v', 's', 'e', 'f', '-', 's',
  'w', 'f', 'c', 'e', 'w', ' ', 'f',
  '-', 'w', 'e', 'f', ' '
]
 */

