//you can nest arrays inside of arrays 

let colors = [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    ['purple', 'lilac']
]

//mixed array example

let colors2 = [
    ['blue', 'light blue'],
    2,
    true,
    ['another', 'array']
]

//how to access an individual element in an array 

console.log(colors2[3]); // will return another array [ 'another', 'array' ]
console.log(colors2[3][0]); // will return the first item in the list 'another'

//update the list 
console.log(colors2[3][0]='yay'); // will return the first item in the list 'another'
console.log(colors2); //will return  [ 'yay', 'array' ] ]

//tik tac toe 

const board = [
    ['0', null,'X'],
    [null,'X','0'],
    ['X','0', null]
]
