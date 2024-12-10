const accId = 4456
let accEmail = "ashlesha@gm.com"
var accPass = "12345"
accCity = "Jaipur"

// accId = 2 //not allowed
accEmail = "ash@gm.com";
accPass = "54321"
accCity = "Mumbai"

console.log(accId);
console.log(accEmail);

/* 
Prefer not to use var
'cause of issue in block scope and functional scope
*/

console.table([accId, accEmail, accPass, accCity]);