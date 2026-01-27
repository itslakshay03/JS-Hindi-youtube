const accountId = 144553
let accountEmail = "lakshay@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 not allowed

/*
var should not be used
should because of 
block scope and functional scope issue
*/

accountEmail="jkdf.com"
accountPassword="342423"
accountCity="chennai"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])