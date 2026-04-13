let celebrities = [
    { name: "Michael Jackson", age: 50, role: "singer" },
    { name: "Leonardo DiCaprio", age: 49, role: "actor" },
    { name: "Taylor Swift", age: 34, role: "singer" },
    { name: "Elon Musk", age: 52, role: "businessman" },
    { name: "Cristiano Ronaldo", age: 39, role: "footballer" },
    { name: "Billie Eilish", age: 22, role: "singer" },
    { name: "Tom Holland", age: 27, role: "actor" },
    { name: "Emma Watson", age: 34, role: "actor" },
    { name: "MrBeast", age: 25, role: "blogger" },
    { name: "Zendaya", age: 27, role: "actor" }
];

let names = celebrities.map(c => c.name);
console.log("Имена:", names);


let sentences = celebrities.map(c => `${c.name} is a ${c.role}`);
console.log("Строки:", sentences);

let oldest = celebrities.reduce((max, c) => c.age > max.age ? c : max);
let youngest = celebrities.reduce((min, c) => c.age < min.age ? c : min);

console.log("Самый старший:", oldest);
console.log("Самый младший:", youngest);
console.log("Разница в возрасте:", oldest.age - youngest.age);

let hasMinor = celebrities.some(c => c.age < 18);
console.log("Есть несовершеннолетний:", hasMinor);

let olderThan20 = celebrities.filter(c => c.age > 20);
console.log("Старше 20:", olderThan20);