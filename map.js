//1.	Given an array of numbers, use .map() to return a new array where each number is multiplied by 3.

//const numbers = [2, 4, 6, 8];
// Expected output: [6, 12, 18, 24]
 const numbers = [2,4,6,8];
 const multiply = numbers.map(num => num *3);
 console.log(multiply);
 //2.	Given an array of strings, use .map() to return a new array where each string is converted to uppercase.

//const words = ["hello", "world", "javascript"];
//Expected output: ["HELLO", "WORLD", "JAVASCRIPT"]
const words = ["hello", "world", "javascript"];
const uppercaseWords = words.map(word => word.toUpperCase());
console. log(uppercaseWords);
//3.	Given an array of numbers, return an array where each number is replaced by its square.

//const numbers = [1, 2, 3, 4];
// Expected output: [1, 4, 9, 16]
const numbers = [1, 2, 3, 4];
const square = numbers.map(num => num *num);
console.log(square);
//4.	Given an array of names, use .map() to add the prefix “Mr. “ to each name.

//const names = ["John", "Mike", "Sam"];
// Expected output: ["Mr. John", "Mr. Mike", "Mr. Sam"]
const names = ["John", "Mike", ""Sam];
const prefixedNames = names.map(name => "Mr." + name);
console.log(prefixedNames);
//5.	Given an array of objects representing students with name and marks, return an array with only their marks increased by 5.

//const students = [
   // { name: "Alice", marks: 80 },
  //  { name: "Bob", marks: 75 },
 // ];
  // Expected output: [85, 80]
  const students = [
    { name: "Alice", marks: 80 },
    { name: "Bob", marks: 75 }];
  const updatedMarks = students.map(student => student.marks + 5);
  console.log(updatedMarks);
 // 6.	Given an array of numbers, use .map() to convert them into strings.

//const numbers = [1, 2, 3, 4];
// Expected output: ["1", "2", "3", "4"]
const numbers = [1, 2, 3, 4];
const stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers);
//7.	Given an array of product objects with name and price, return an array where prices are increased by 10%.

//const products = [
 // { name: "Laptop", price: 1000 },
  //{ name: "Phone", price: 500 }
];
// Expected output: [{ name: "Laptop", price: 1100 }, { name: "Phone", price: 550 }]
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 }];
    const updatedProducts = products.map(product => ({
        name: product.name,
        price: product.price * 1.10

    }));
    console.log(updatedProducts);
    //8.	Given an array of numbers, use .map() to return an array of boolean values where true represents even numbers and false represents odd numbers.

//const numbers = [1, 2, 3, 4, 5];
// Expected output: [false, true, false, true, false]

const numbers = [1, 2, 3, 4, 5];
const booleanArray = numbers.map(num => num % 2 === 0);
console.log(booleanArray);
 // 9.	Given an array of words, return a new array where each word’s first letter is capitalized.

//const words = ["apple", "banana", "cherry"];
// Expected output: ["Apple", "Banana", "Cherry"]

const words = ["apple", "banana", "cherry"];
const updatedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(updatedWords);
//10.	Given an array of temperatures in Celsius, use .map() to convert them into Fahrenheit.

//const celsiusTemps = [0, 20, 30, 40];
// Expected output: [32, 68, 86, 104]
const celsiusTemps = [0, 20, 30, 40];
const fahrenheit = celsiusTemps.map(celsius => (celsius* (9/5) + 32));
console.log(fahrenheit);











  
  



