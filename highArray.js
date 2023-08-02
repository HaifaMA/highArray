let books = [
    {title: 'universe', author: 'Mark'},
    {title: 'earth', author: 'steve'},
    {title: 'animals', author: 'grace'}
]
let booksTitle = books.map((book) => {
    return book.title;
});
console.log(booksTitle);

let products = [
    {prpduct: 'iphone11', availability: 'out of stock'},
    {product: 'iphone14', availability: 'in stock'},
]
let inStockProducts = products.filter((product) => {
    return product.availability === 'in stock';
});
console.log(inStockProducts);

let users = [
    {user: 'Sam', email: 'Sam@gmail.com'},
    {user: 'steve charles', email: 'charles@gmail.com'},
    {user: 'haley charles', email: 'charles@gmail.com'}
];
let firstMatch = users.find((user) => {
    return user.email === 'charles@gmail.com';
});
console.log(firstMatch);

let tasks = [
    {task: 'write', completed: 'true'},
    {task: 'organize', completed: 'true'},
    {task: 'write', completed: 'false'},
]
let completedTasks = tasks.every((task) => {
    return task.completed === true; 
});
console.log(completedTasks);

let numbers = [5, 4, 7, 10];
let numSum = numbers.reduce((updated, current) => {
    return updated + current;
});
console.log(numSum);

let strings = ['blue', 'grey', 'black'];
let upperCase = strings.map((string) => {
    return string.toUpperCase();
});
console.log(upperCase);

let theNumbers = [4, 6, 5, 1, 8];
let evenNum = theNumbers.filter((number) => {
    return number % 2 === 0;
});
console.log(evenNum);

let words = ['pin', 'paper', 'book'];
let wordsLength = words.filter((word) =>
{
    return word.length <= 4;
});
console.log(wordsLength);