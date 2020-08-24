//buisness Logic for Location
function TravelGuide() {
  this.location = [];
  this.currentId = 0;
}

TravelGuide.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.location.push(location)
}

TravelGuide.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TravelGuide.prototype.findLocation = function(id) {
  for (let i=0; i< this.location.length; i++) {
    if (this.location[i]) {
      if (this.location[i].id == id) {
        return this.location[i];
      }
    }
  };
  return false;
}












//Business Logic for Location
function Location(city, country, year, landmark, memory) {
  this.city = city;
  this.country = country;
  this.year = year;
  this.landmark = landmark;
  this.memory = memory;
}

Location.prototype.place = function() {
  return this.city + ", " + this.country;
}