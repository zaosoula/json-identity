(async function(){
  const util = require('util')

  const JsonPerson = require('../index.js').JsonPerson;
  let person = new JsonPerson();

  person.blank();

  await person.save(__dirname + "/persons/blank.json");

  console.log("----- Person -----\n");
  console.log(util.inspect(person, false, null, true));
  console.log("\n\n----- Created and saved -----\n");
})();
