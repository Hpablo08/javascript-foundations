class Pirate {
  constructor(name, job){
    this.name = name
    this.job = job || 'scallywag'
    this.cursed = false
    this.booty = 0
    this.cursed = false
  }
  robShip(){
        if (this.booty >= 500) //stopping the arguement at 50
        {
           this.cursed = true
           return 'ARG! I\'ve been cursed!' //stopping conditional with the return statement
        } else {  this.booty += 100  }
        if (this.cursed = true) {
        }
        return 'YAARRR!'
          }
  timeTravel(){
  }

  liftCurse(){
    if (this.booty === 100){
 return  'You don\'t need to lift a curse!'
} else if ( this.booty = 200){
  this.cursed = false
return'Your curse has been lifted!'
}
  }
   }



    // if (this.booty === 500){
    //   this.cursed = true
    //   return 'ARG! I\'ve been cursed!'
    // } else {














module.exports = Pirate;
