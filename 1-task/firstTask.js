let arr = [3, 8, 15, 22, 7];
console.log("Массив:", arr);

arr.push(10);
console.log("После push:", arr);

arr.shift();
console.log("После shift:", arr);

let evenNumbers = arr.filter(num => num % 2 === 0);
console.log("Чётные числа:", evenNumbers);

let multiplied = arr.map(num => num * 5);
console.log("Умножено на 5:", multiplied);

let sum = arr.reduce((acc, num) => acc + num, 0);
let average = sum / arr.length;
console.log("Среднее:", average);

let sorted = [...arr].sort((a, b) => a - b);
console.log("Отсортированный:", sorted);