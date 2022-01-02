//reverse - reverses an array in place; does NOT make a copy but impacts the actual array 

//join - spits out all elements into one single string

let arrayJoin = ['hello', true, 34];
console.log(arrayJoin.join()); //will return hello,true,34 in a single string separated by commas 

//you can also make it join by another variable by placing it in ''

console.log(arrayJoin.join('*')); //will return this string hello*true*34

//reverse example 

console.log(arrayJoin.reverse().join('^')); //34^true^hello

//REMEMBER Revers does mutate the actual array 




