const util = require('util')

const JsonPerson = require('../index.js');
let person = new JsonPerson();

console.log("----- Person -----\n");
console.log(util.inspect(person, false, null, true));
console.log("\n\n----- UPDATE LOGS -----\n");
console.log(person.currentUpdate.additionalNotes);
console.log("\n\n");
