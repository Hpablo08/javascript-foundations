class Vampire {
  constructor(name, pet) {
    this.name = name
    this.pet = pet || 'bat'
    this.thirsty = true
    this.ouncesDrank = 0
  }
drink(){
  this.thirsty = false
if (this.ouncesDrank === 50) //stopping the arguement at 50
 {
  return `I\'m too full to drink anymore!` //stopping conditional with the return statement
} else  {
  this.ouncesDrank +=10
}
}
}












module.exports = Vampire;
