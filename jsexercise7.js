// JS Exercise 7
var cities = [
    'dubai',
    'delhi',
    'london',
    'paris',
    'milan'
];

// 1. Use a for loop to console.log() each city in the cities array
// for( var i = 0; i < cities.length; i++ ) {
//     console.log( cities[i] );
// }

// 2. Use the appropriate string method(s) to capitalize cities[0]
//    Note: dubai ----> Dubai
// console.log(
//     cities[0][0].toUpperCase() + cities[0].slice(1)
// );


// 3. Combine solutions from (1) and (2) to capitalize every city in
//    the cities array

for( var i = 0; i < cities.length; i++ ) {
    console.log(
        cities[i][0].toUpperCase() + cities[i].slice(1)
    )
}