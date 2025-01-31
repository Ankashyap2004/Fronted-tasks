//1.	Given an array of numbers, use .filter() to return a new array containing only numbers greater than 10.

//const numbers = [5, 10, 15, 20, 25];
// Expected output: [15, 20, 25]
const numbers = [5, 10, 15, 20, 25];
const greater = numbers.filter(num => num >10);
console.log(greater);

//	2.	Given an array of words, use .filter() to return only the words with more than 4 letters.

//const words = ["car", "bicycle", "bus", "train"];
// Expected output: ["bicycle", "train"]
const words = ["car", "bicycle", "bus", "train"];
const long = words.filter(word => word.length > 4);
console.log(long);

//3.	Given an array of objects representing people with name and age, return an array of people who are 18 or older.

//const people = [
  //  { name: "Alice", age: 17 },
    //{ name: "Bob", age: 20 },
    //{ name: "Charlie", age: 15 },
  //];
  // Expected output: [{ name: "Bob", age: 20 }]
  
const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 15 },
  ];
const newPeople = people.filter(people => people.age >=18)
console.log(newPeople);  

//	4.	Given an array of numbers, filter out all the odd numbers.

//const numbers = [1, 2, 3, 4, 5, 6];
// Expected output: [2, 4, 6]
const numbers = [1, 2, 3, 4, 5, 6];
const oddNumber = numbers.filter(num => num % 2 === 0);
console.log(oddNumber);

//5.	Given an array of product objects with name and price, return only the products that cost less than 50.

//const products = [
  //  { name: "Notebook", price: 30 },
    //{ name: "Bag", price: 100 },
    //{ name: "Pen", price: 10 }
  //];
  // Expected output: [{ name: "Notebook", price: 30 }, { name: "Pen", price: 10 }]

  const products = [
  { name: "Notebook", price: 30 },
  { name: "Bag", price: 100 },
  { name: "Pen", price: 10 }
];
const newProducts = products.filter(product => product.price < 50);
console.log(newProducts);

//	6.	Given an array of emails, filter out those that do not contain “@”.

//const emails = ["john.doe@gmail.com", "invalid.email.com", "hello@world.com"];
// Expected output: ["john.doe@gmail.com", "hello@world.com"]
const emails = ["john.doe@gmail.com", "invalid.email.com", "hello@world.com"];
const updatedEmails = emails.filter(email => email .includes("@"));
console.log(updatedEmails)

//7.	Given an array of numbers, filter out only the prime numbers.

//const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// Expected output: [2, 3, 5, 7]

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = num => {
    if(num <2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);


//8.	Given an array of students with name and marks, return an array of students who scored more than 75.

//const students = [
  //  { name: "Alice", marks: 80 },
    //{ name: "Bob", marks: 70 },
    //{ name: "Charlie", marks: 90 }
  //];
  // Expected output: [{ name: "Alice", marks: 80 }, { name: "Charlie", marks: 90 }]
  const students = [
    { name: "Alice", marks: 80 },
    { name: "Bob", marks: 70 },
    { name: "Charlie", marks: 90 }
  ];
const updatedMarks = students.filter(student => student.marks > 75);
console.log(updatedMarks);

//	9.	Given an array of mixed data types, use .filter() to return only the strings.

//const mixedArray = [1, "hello", true, "world", 42, "JavaScript"];
// Expected output: ["hello", "world", "JavaScript"]
const mixedArray = [1, "hello", true, "world", 42, "JavaScript"];
const stringArray = mixedArray.filter(item => typeof item === "string");
console.log(stringArray);

//10.	Given an array of objects representing tasks with title and completed (boolean), return only the completed tasks.

//const tasks = [
  //{ title: "Learn JavaScript", completed: true },
  //{ title: "Learn Python", completed: false },
  //{ title: "Learn React", completed: true }
//];
// Expected output: [{ title: "Learn JavaScript", completed: true }, { title: "Learn React", completed: true }]

const tasks = [
    { title: "Learn JavaScript", completed: true },
    { title: "Learn Python", completed: false },
    { title: "Learn React", completed: true }
  ];
const completedTask = tasks.filter(task => task.completed);
console.log(completedTask);
  


