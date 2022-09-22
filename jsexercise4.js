// JS Exercise 4

// 1. Use the prompt() function to get a coffee order from the 
//    user. Ask the user for 'type','milk', and 'sugar'.

// 2. Create a function called 'coffeeMachine' with the following
//    parameters: type, milk, sugar
//    For 'type' parameter: 'Americano','Latte','Espresso','Capuccino'
//    For 'milk' parameter: 'Yes Milk', 'No Milk',
//    For 'sugar' parameter: 'Yes Sugar', 'No Sugar',

// 3. Inside the function, create an empty array called 'theOrder'

// 4. Use the right array method to put the arguments of the 
//    parameters in the array 'theOrder'


// 5. The function should return 'theOrder'
//    For example, the output of the function could be 
//    '["Americano","Yes Milk", "No Sugar"]'
//    '["Latte","No Milk","Yes Sugar"]'


function coffeeMachine(type, milk, sugar) {

    var theOrder = [];
    
    theOrder.push(type);
    theOrder.push(milk);
    theOrder.push(sugar);

    return theOrder;

};



var typeSelection = prompt("Please enter your preferred coffee type:");
var milkSelection = prompt("Please enter 'Yes Milk' or 'No Milk':");
var sugarSelection = prompt("Please enter 'Yes Sugar' or 'No Sugar':");

// Calling the function
console.log(
    coffeeMachine(typeSelection, milkSelection, sugarSelection)
);