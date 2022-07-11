class Dragon {
constructor(name, rider){
  this.name = name
  this.rider = rider
}
greet(){

//console.log(this.rider)
return `Hi, ${this.rider}!`
}
}



module.exports = Dragon;
