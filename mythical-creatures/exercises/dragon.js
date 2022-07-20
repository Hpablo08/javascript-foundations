class Dragon {
  constructor(name, rider) {
    this.name = name
    this.rider = rider
    this.hungry = true
    this.eaten = 0 //counter
  }
  greet() {
    //console.log(this.rider)
    return `Hi, ${this.rider}!`
  }
  eat() {

    this.eaten++
    if (this.eaten >= 3) {
      return this.hungry = false
    } //var eats = 0 another way for counting
    // eats ++
    // if (eat >=3) {return this.hungry = false
  }
}
module.exports = Dragon;
