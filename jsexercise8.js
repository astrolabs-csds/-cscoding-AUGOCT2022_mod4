// JS Exercise 8

// 1. Use a for loop to go through the products
// 2. Use the .includes() method to check if item belongs in 'electronics'
// 3. If the item is electronics, use an array method to put the element in 'electronics'

var products = [
    'Smartphone',
    'Smartphone',
    'Chair',
    'Table',
    'Laptop',
    'TV Screen',
    'Pen',
    'Headphones'
];

var others = [
    'Chair',
    'Table',
    'Pen',
];

var electronics = [];


for ( var i = 0; i < products.length; i++ ) {
    var currentProduct = products[i];

    // If item is not in 'other', add to 'electronics'
    if( !others.includes(currentProduct) ) {
        electronics.push( currentProduct )
    
    // Else, ignore it
    } else {
        console.log(currentProduct + " is not an electronic item");
    }
};

console.log(electronics)

