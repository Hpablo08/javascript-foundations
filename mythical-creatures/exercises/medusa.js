var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues =[];
  }
  gazeAtVictim(victim) {
      var newStatue = new Statue(victim.name);
        if (this.statues.length <= 3) {
          this.statues.push(newStatue);
      } if (this.statues.length > 3) {
          var freedPerson = new Person(this.statues[0].name);
          this.statues.shift();
          freedPerson.mood = 'relieved';
          return freedPerson;
      }
    }
  }


// else if (this.statues.length < 3){
//   this.statues.push(new Statue(victim.name))
//   this.statues.shift(new Statue(victim.name))
// }
// }
// }














module.exports = Medusa;
