// 1. Built-in Functions
// --------------------------------------------------

// alert("Good Morning");
// var userName = prompt("What is your name?");


// var firstName = "Abdelrahman";
// alert("Hi " + firstName + ",\n\nThis is your message\n\nBest Regards,\nEtisalat");

// alert("Good" + "\n" + "Morning");




// 2. Variables
// --------------------------------------------------

// Rules for Naming Variables
// 1. Begin with a lowercase letter
// 2. No special characters except for _
// 3. Not named after a reserved keyword or name
// 4. Use either camel case or snake case

// no case
// var myfirstname = "Dany";

// camel case
// var myFirstName = "Dany";

// snake case
// var my_first_name = "Dany";




// 3. Control Statements
// --------------------------------------------------
// 3.1 If/Else

// var price = 1000;
// var budget = 1000;

// if(price <= budget) {
//     alert("Buy");
// }
// else {
//     alert("Don't Buy");
// }


// iPhone 13, S22, Pixel 7
// 3000, 2700, 2500

// var userSelection = prompt("Enter product name:");

// if(userSelection == "iPhone 13") {
//     alert(3000);
// }
// else if(userSelection == "S22") {
//     alert(2700);
// }
// else if(userSelection == "Pixel 7") {
//     alert(2500);
// }
// else {
//     alert("Product not available.")
// }


// 3.2 While Loop
// var counter = 0;

// while(counter < 10) {
//     console.log(counter);
//     counter += 1;
// }



// 3.3 For Loop
// for(var counter = 0; counter < 20; counter++) {
//     console.log(counter);
// }



// var cities = [ 
//     'Mumbai',
//     'Dubai',
//     'New York',
//     'Los Angeles'
// ];


// for(var i = 0; i < cities.length; i++) {
//     console.log( cities[i] );
// }



// 4. Operators
// --------------------------------------------------
// =                Assignment
// ==               Comparison
// ===              Strict Comparison
// +                Addition or Concatenation
// -                Subtraction
// *                Multiplication
// /                Division
// %                Modulo
// ||               OR
// &&               AND
// +=               Increment
// -=               Decrment
// !                NOT
// !=               NOT equal
// <                Less than
// >                Greater than
// <=               Less than or equal
// >=               Greater than or equals




// 5. Linear Data Structures (Array)
// --------------------------------------------------
// var people = [
//     'Nikolai',          // 0
//     'Tatiana',          // 1
//     'Vrishank'          // 2
// ];


// 5.1 Array Methods
// Full list of methods
// https://www.w3schools.com/jsref/jsref_obj_array.asp

// .push()                  Adds element at end
// .pop()                   Removes element from end
// .unshift()               Adds element at start
// .shift()                 Removes element from start
// .splice()                Add or remove element at specific index

// people.unshift('Ammar');
// console.log(people);

// people.shift();
// console.log(people);


// Add at index 1
// people.splice(1,0,'Ammar');

// console.log(people);

// Remove at index 1
// people.splice(1,1);
// console.log(people);

// Replace at index 1
// console.log(people);
// people.splice(1,1,'Ammar');
// console.log(people);


// 5.2 Multidimensional Arrays
// var brands = [
//     'Samsung',
//     'Apple',
//     'Huwaei',
//     'Xaomi',
//     'Nokia',
//     'Sony'
// ];

// // console.log(brands.length);
// brands.push('Oppo');
// console.log(brands);


// var prod1 = ['Samsung','S22', 2800];
// var prod2 = ['Apple','iPhone 13', 3000];
// var prod3 = ['Sony', 'PS5', 2500];


// console.log( prod1[2] );
// console.log( prod3[0] );


// var cart = [
//     ['Samsung',     'S22',          2800],
//     ['Apple',       'iPhone 13',    3000],
//     ['Sony',        'PS5',          2500]
// ]


// console.log( cart[0][0]  );
// console.log( cart[1][0]  );


// 6. Objects
// --------------------------------------------------


// var airports1 = [
//     'dxb',          // 0
//     'jfk',          // 1
//     'bom',          // 2
//     'lax'           // 3
// ];

// console.log( airports1[0] );


// var airports2 = {
//     'Dubai': 'dxb',
//     'New York': 'jfk',
//     'Mumbai': 'bom',
//     'Los Angeles': 'lax'
// }

// // Square Bracket Syntax
// airports2['Dubai']
// airports2['New York']

// // Dot Syntax
// airports2.Dubai





// var airports3 = {
//     'bom': ['Mumbai', 'India'],
//     'dxb': ['Dubai','UAE'],
//     'jfk': ['New York', 'USA'],
//     'lax': ['Los Angeles', 'USA']
// }


// // Square Bracket Syntax
// airports3['bom'][0]
// airports3['bom'][1]
// airports3['jfk'][1]

// // Dot Syntax
// airports3.bom[0]
// airports3.bom[1]
// airports3.jfk[1]

// Adding element to object
// airports3['dwc'] = ['Dubai','UAE'];
// console.log(airports3);

// // Deleting element in onbject
// delete airports3['dwc'];
// console.log(airports3);



// Object.keys(airports3) 
// // ['bom','dxb','jfk','lax']

// Object.values(airports3) 
// // [ 
// //     ['Mumbai', 'India'],  
// //     ['Dubai','UAE'], 
// //     ['New York', 'USA'], 
// //     ['Los Angeles', 'USA']
// // ]




// 7. Functions
// --------------------------------------------------
// function addTwoNumbers(numA, numB) {
//     var sum = numA + numB
//     return sum;
// };


// addTwoNumbers(500,600);




// 8. Strings
// --------------------------------------------------

// "uae".toUpperCase() /// Returns UAE

// var address = "Cluster R, JLT, Dubai, UAE";
// address.slice(0,9) // "Cluster R"

// ["06","09","2022"].join("/")  // 06/09/2022



function capitalize(someWord) {
    var result = someWord[0].toUpperCase() + someWord.slice(1);
    return result;
}


