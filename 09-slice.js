//similar to the string ; takes portion of an array
//takes two arguments (starting index, stopping index - WILL NOT BE INCLUDED IN THE ARRAY)

let slicedArray = ['red','orange','yellow', 'purple'];
console.log(slicedArray.slice(0,2)); // will return [ 'red', 'orange' ] index zero and index one 

//if you only enter one value, then it will use it at the start and continue to the end 
console.log(slicedArray.slice(2));// will return [ 'yellow', 'purple' ]

console.log(slicedArray.slice(-3,-1));// starts three elements back, stops one element back // returns [ 'orange', 'yellow' ]

