//allwos you to update the middle of the array 
//takes three values
//remove, replace or add elements in array 
//(start index, how many things to delete, things to add )

let animals = ['shark', 'salmon', 'whale','bear','lizard','tortoise'];

//add item after shard 

let animals2=animals.splice(1,0,'shrimp');// first element in parenthesis is where you want to start removing/inserting, second is how much to delete, 
console.log(animals); //[
//     'shark',    'shrimp',
//     'salmon',   'whale',
//     'bear',     'lizard',
//     'tortoise'
//   ]


//ex 2: delete using splice 
//only enter the first two value in parens 

animals.splice(3,2);
console.log(animals); //[ 'shark', 'shrimp', 'salmon', 'lizard', 'tortoise' ]
//whale and bear are removed because the deletion started at the 3rd index 
