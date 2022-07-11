class Hobbit {
  constructor(data) { //({name:name})
    this.name = data.name // follow the tree
    this.age = 0
    this.adult = false
  }
  celebrateBirthday(){
    this.age ++
      if (this.age >= 33) {
      return this.adult = true
    } else if (this.age >= 32){
      return this.adult = false
    }
  }
}








module.exports = Hobbit;
