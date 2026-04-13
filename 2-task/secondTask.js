let people = [
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

let names = people.map(function(p) {
  return p.name;
});
console.log(names);

let text = people.map(function(p) {
  return p.name + " is a " + p.role;
});
console.log(text);

let oldest = people.reduce(function(a, b) {
  if (b.age > a.age) {
    return b; 
  } else {
    return a; 
  }
});
console.log(oldest);

let youngest = people.reduce(function(a, b) {
  if (b.age < a.age) {
    return b; 
  } else {
    return a; 
  }
});
console.log(youngest);

console.log(oldest.age - youngest.age);

let hasChild = people.some(function(p) {
  return p.age < 18;
});
console.log(hasChild);

let older = people.filter(function(p) {
  return p.age > 20;
});
console.log(older);