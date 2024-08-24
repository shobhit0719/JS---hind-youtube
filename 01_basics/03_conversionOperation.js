let score = 33
console.log(typeof score);
console.log(typeof(score));

/*When you convert sring into number then eaisly converted 
for ex :- "33" => 33

but if we type this type "33abc" => then it gives value like NaN

*/
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);
// when you write 1 => then it convert true in boolean & 0 => false
// When you use empty string you get false " " => false
// When you add some value to the string it gives true "Shobhit " => true

let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);
//So here you can see this number is converted into string
//In output it looks like a number but when you check its type then you'll find it's string


