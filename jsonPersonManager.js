const jsonPerson = require('./jsonPerson.js');
class JsonPersonManager {

  constructor(arg) {
    this.basePath = null;
    this.persons = [];
  }

  newPerson() {
    let newPerson = new JsonPerson();
    this.persons.push(newPerson);
    return newPerson;
  }

  async saveAll() {
    for (let person of this.persons) {
      if(person.path!==null) await person.save();
    }
  }

}
module.exports = JsonPersonManager
