class Unicorn { //made a class
  constructor(name, color) { //constructor function with two parameters
    this.name = name;  // created key sand assigned them they value of parameters
    this.color = color || "white"; //set a default value using || after the parameter
  }
isWhite() {  //created a method(functions inside of classes)
   return false // refute is white, it wanted a false value
says(saying) { // passed in a parameter so that my function could have multiple sayings
return `**;* ${saying} *;**` // interpelated parameter to match desired value
  }
}

module.exports = Unicorn;
