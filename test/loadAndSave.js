(async function(){
  const util = require('util')

  const JsonPerson = require('../index.js').JsonPerson;
  let person = new JsonPerson();

  await person.load('./persons/blank.json');

  console.log("----- Person -----\n");
  console.log(util.inspect(person, false, null, true));
  person.data['json-identity'].id = "TheBlankPersonId";
  await person.save();
  console.log("\n\n----- Loaded, updated, and saved -----\n");
})();
