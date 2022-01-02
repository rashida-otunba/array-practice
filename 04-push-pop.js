//Array Methods 
//pop- remove from end 
//push - add to end 
//shift - remove from start 
//unshift - add to start 
//concat- merge arrays 
// includes - look for value 
//indexOf - just like str indexOf
//join - creates a string from an array 
//reverse - reverses an array 
//slice - copy a portion of an array 
//splice - remove / replace elements 
//sort - sorts an array 

//note: array values can change as long as the reference remains the same 

const myEggs = ['brown', 'green'];
let myEggs2= myEggs.push('purple')
let myEggs3=myEggs[0] = 'lavendar'; //will replace 'brown'
console.log(myEggs)//[ 'lavendar', 'green', 'purple' ]

