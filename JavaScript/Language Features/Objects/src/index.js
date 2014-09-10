// Everything in JS is object except primitive types.
var b = new Boolean();
console.log("type of new Boolean() is : " + typeof(b));
b = true;
console.log("type of boolean is : " + typeof (b));

var n = new Number();
console.log("type of new Number() is : " + typeof(n));
n = 100;
console.log("type of number is : " + typeof(n));

var s = new String();
console.log("type of new String() is : " + typeof (s));
s = "JavaScript";
console.log("type of string is : " + typeof (s));

var d = new Date();
console.log("type of new Date() is : " + typeof (d));

var a = new Array();
console.log("type of Array is :" + typeof (a));

// Empty object
var emptyObject = {};
console.log("Empty Object : " + emptyObject);

// Object with single property
var customer = { firstName: 'Prasad' };
console.log(customer.firstName);

// Object with multiple properties
var customer = { firstName: 'Prasad', Age: '30' };
console.log(customer.firstName);
console.log(customer.Age);

// Using Object constructor
var customer = new Object();
customer.fullName = 'Prasad Honrao';
console.log(customer.fullName);

// Object with single property and single function
var customer = {
    name: "Prasad",
    Greet: function (userName) {
        console.log("Hello " + userName);
    }
}
console.log(customer.name);
customer.Greet("Prasad");


// Object retrieval
var customer = {
    name: "Prasad"
}
var city = customer["city"] || 'Pune';
console.log('Customer ' + customer.name + ' lives in city ' + city);

// Nested objects
var customer = {
    firstName: "Prasad",
    lastName: "Honrao",
    address: {
        street: "University st",
        postcode: "Z12CV4"
    },
    "telephone number": "1234567890",  // note property name can contain space but needs to be enclosed in ""
    colors: [  // adding array as a property
        { id: 1, name: "Red" },
        { id: 2, name: "Blue" }
    ]
};

console.log(customer.address.street);
console.log(customer["address"]["postcode"]);
console.log(customer["telephone number"]); // cant use customer."telephone number"
console.log(customer.colors[0].name);

// Dynamic properties and methods
var customer = {
    firstName: "Colin"
};

customer.lastName = "Gray"; // adding new property dynamically
customer.phone = "0123456789"; // adding new property dynamically

customer.call = function () { // adding function dynamically
    var toCall = this.phone;
    console.log("calling customer");
};

console.log(customer.firstName + " " + customer.lastName + " " + customer.phone);
customer.call();

// Deleting object property

var customer = { firstName: 'Prasad' };
console.log(customer.firstName); 
delete customer.firstName;
if (customer.hasOwnProperty('firstName')) {
    console.log(customer.firstName);
}
else {
    console.log("FirstName property has been deleted");
}

// Object Reference
var customer = {firstName : 'Prasad'};
var newCustomer = customer;
newCustomer.firstName = "Scott";
console.log(customer.firstName);