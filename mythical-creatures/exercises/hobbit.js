class Hobbit {
  constructor(data) { //({name:name})
    this.name = data.name // follow the tree
    this.age = 0
    this.adult = false
    this.old = false
  }
  celebrateBirthday() {
    this.age++
    if (this.age > 32 && this.age < 101) {
      return this.old = true
    } else if (this.age > 100) {
      return this.old = true
    }
  }
  }








module.exports = Hobbit;
