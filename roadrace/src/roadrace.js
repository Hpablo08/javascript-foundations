class Roadrace {
constructor(data){
  this.name = data.title
  this.location = data.city
  this.distance = 0
  this.participants = []
}
setDistance(miles){
  this.distance += miles
  return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
}
registerParticipants(runner){
  this.participants.push(runner)
}
completeRace(){
  console.log(this.participants)
  console.log(this.name)
  this.participants.completedRaces.push(this.name)


}
}

module.exports = Roadrace;
