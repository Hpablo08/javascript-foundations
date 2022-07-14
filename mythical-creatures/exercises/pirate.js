class Pirate {
  constructor(name, job){
    this.name = name
    this.job = job || 'scallywag'
    this.cursed = false
    this.booty = 0
    this.cursed = false
  }
  robShip(){
        if (this.booty === 500) //stopping the arguement at 50
        {
           this.cursed = true
           return 'ARG! I\'ve been cursed!' //stopping conditional with the return statement
        } else {  this.booty += 100  }
        if (this.cursed = true) {
        }
        return 'YAARRR!'
          }
        }



    // if (this.booty === 500){
    //   this.cursed = true
    //   return 'ARG! I\'ve been cursed!'
    // } else {














module.exports = Pirate;
