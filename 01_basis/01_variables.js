const accountId  = 1245
let accEmail = "deepak@gmail.com"
var accPassword = "234"
accCity = "Dehradun"
let accState;
// accountId = 234 not allowed

accEmail = "Gssf@,com"
accPassword = "7433"
accCity = "Roorkee"
console.log(accountId);


/*
Prefer not using var
because of issue on block scope and functional scope
*/
console.table([accountId,accEmail,accPassword,accCity,accState])
