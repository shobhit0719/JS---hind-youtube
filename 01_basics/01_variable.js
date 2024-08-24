const accountId = 164337463
let accountEmail ="shobhit112@gmail.com"
var accountPssword = "1234"
// Variable can also be declare like this but this is not good approach..
accountCity = "Gaya"

// acccountId = 2 not allowed whic means you can't change once declared..


accountEmail = "lero@gmail.com"
accountPssword = "2576253"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
beacuse issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPssword,accountCity])
