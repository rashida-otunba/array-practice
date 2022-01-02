//concat - merge arrays 
//creates a brand new array -- does not erase the original arrays 

const concatExample = ['i', 'am', 'array', 'one'];
const concatExample2 = ['and','i', 'am', 'another array', 'two'];
console.log(concatExample.concat(concatExample2)); //returns this array : [ 'i', 'am', 'array', 'one', 'and', 'i', 'am', 'another array', 'one' ]


// const concatExample = ['i', 'am', 'array', 'one'];
// const concatExample2 = ['and','i', 'am', 'another array', 'two'];
console.log(concatExample2.concat(concatExample)); //returns [ 'and', 'i', 'am', 'another array', 'two', 'i', 'am', 'array', 'one' ]

const concatExample3=['i','am','the','final','array','three'];
let bigConcat = concatExample.concat(concatExample2, concatExample3);
console.log(bigConcat); //[
//     'i',     'am',
//     'array', 'one',
//     'and',   'i',
//     'am',    'another array',
//     'two',   'i',
//     'am',    'the',
//     'final', 'array',
//     'three'
//   ]