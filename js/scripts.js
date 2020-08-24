//buisness Logic for Location
function travelGuide() {
  this.place = [];
  this.currentId = 0;
}

travelGuide.prototype.addLocation = function(place) {
  place.id = this.assignId();
  this.place.push(place)
}

travelGuide.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

travelGuide.prototype.










//Business Logic for Location
function Location(city, country, year, landmark, memory) {
  this.city = city;
  this.country = country;
  this.year = year;
  this.landmark = landmark;
  this.memory = memory;
}

Location.prototype.destination = function() {
  return this.city + ", " + this.country;
}