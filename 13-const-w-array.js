//const is often used with arrays 
//const cannot be changed once declared 

//array is a reference type; you can change so long as the reference type remains the same 


const myEggs =['brown','brown']//you can add things in and push things into the array 
// const myEggs=['blue','pink']//this will NOT worK! you cannot  change the reference with new array values; this action is attempting to change the reference 

myEggs.push('purple');
myEggs[0]='green';//replaces the first item in the list 

console.log(myEggs); //returns [ 'green', 'brown', 'purple' ]
