console.log(2 < 1);
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" < 1);
console.log("02" <  1);


console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

/* 

Here the reason is that an equalitiy check == and comparisions ><>=>=
work differently.

Comapriso=ion convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1)null >0 is false.

*/

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined >= 0);//false

//=== This is strictly check it check the Data type also for ex:-
console.log("2" === 2);
// So it's give false beacuse data type is not same..




