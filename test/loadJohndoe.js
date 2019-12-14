(async function(){
  const util = require('util')

  const JsonPerson = require('../index.js').JsonPerson;
  let person = new JsonPerson();

  await person.load('./persons/johndoe.json');

  console.log("----- Person -----\n");
  console.log(util.inspect(person, false, null, true));
})();
