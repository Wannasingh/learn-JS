// type of coversion = change the datatype of a value to another (strings, number, booleans)
let age = 20
age = Number(age)
age += 1;
console.log(age);

let x = "220";
let y = "empty";
let z = "0";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)