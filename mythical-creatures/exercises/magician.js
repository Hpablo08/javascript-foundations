
class Magician  {
   constructor(details){
     this.name = `The Great ${details.name}`
     this.assistant = details.assistant
     this.favoriteAccessory = details.clothing || 'top hat'
     this.clothing = details.clothing
     this.confidencePercentage = 10
}
performIncantation(magic){
  //console.log(magic)
  magic = `${magic}!`
  return magic.toUpperCase()
}

performTrick(){
  this.confidencePercentage += 10
if (this.favoriteAccessory !== 'top hat'){
  return 'PULL DOVE FROM SLEEVE'
} else {
return 'PULL RABBIT FROM TOP HAT'
}
}

performShowStopper(){
  //console.log(this.confidencePercentage)
  //console.log(this)
  if (this.confidencePercentage < 100 || this.assistant === false){
return 'Oh no, this trick is not ready!'
} else {
return 'WOW! The magician totally just sawed that person in half!'
}
}
}

module.exports = Magician;
