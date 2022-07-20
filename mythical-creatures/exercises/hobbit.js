class Hobbit {
  constructor(data) { //({name:name})
    this.name = data.name // follow the tree the test has an object as a parameter
    this.age = 0
    this.adult = false
    this.old = false
    this.hasRIng = true
  }
  celebrateBirthday() {
    this.age++
    if (this.age > 32 && this.age < 101) {
      return this.adult = true
    } else if (this.age > 100) {
      return this.old = true
    }
  }
    getRing() {
      console.log(this.name)
    if (this.name === 'Frodo') {
      this.hasRing = true;
      return 'Here is the ring!';
    } else if (this.name === 'Samwise') {
          this.hasRing = false;{
      return 'You can\'t have it!'
        }
}
}
}






module.exports = Hobbit;
