//Buisness Logic for Location
function TravelGuide() {
  this.locations = [];
  this.currentId = 0;
}

TravelGuide.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations.push(location);
}

TravelGuide.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TravelGuide.prototype.findLocation = function(id) {
  for (let i=0; i< this.location.length; i++) {
    if (this.locations[i]) {
      if (this.locations[i].id == id) {
        return this.locations[i];
      }
    }
  };
  return false;
}


TravelGuide.prototype.deleteLocation = function(id) {
  for (let i=0; i< this.location.length; i++) {
    if (this.locations[i]) {    // checking if this has been deleted already and/or is there any value at this index
      if (this.locations[i].id == id) { //id is not the same as index
        delete this.location[i];
        return true;
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

let travelGuide = new TravelGuide ();

function displayLocationDetails(travelGuideToDisplay) {
  let locationsList = $("ul#destinations");
  let htmlForLocations = "";
  travelGuideToDisplay.locations.forEach(function(location) {
    htmlForLocations += "<li id=" + location.id + ">" + location.city + " " + location.country + " " + location.year + "</li>";
  });
  locationsList.html(htmlForLocations);
};

function showLocation(locationId) {
  const location = travelGuide.findLocation(locationId);
  $("#show-output").show();
  $(".city-name").html(location.city);
  $(".country-name").html(location.country);
  $(".year-visited").html(location.year);
  $(".fav-landmark").html(location.landmark);
  $(".fav-memory").html(location.memory);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + location.id + ">Delete</button>");
}

function attachEventListeners() {
  $("ul#destinations").on("click", "li", function() {
    showLocation(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    travelGuide.deleteLocation(this.id);
    $("#show-output").hide();
    displayLocationDetails(travelGuide);
  });
};



//User Interface
$(document).ready(function() {
  attachEventListeners();
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const inputtedCityName = $("input#cityName").val();
    const inputtedCountryName = $("input#countryName").val();
    const inputtedYearVisited = $("input#yearVisited").val();
    const inputtedFavLandmark = $("input#favLandmark").val();
    const inputtedFavMemory = $("input#favMemory").val();

   // $("input#cityName").val("");
   // $("input#countryName").val("");
   // $("input#yearVisited").val("");
   // $("input#favLandmark").val("");
   // $("input#favMemory").val("");
  
  let newLocation = new Location (inputtedCityName, inputtedCountryName, inputtedYearVisited, inputtedFavLandmark, inputtedFavMemory);
  travelGuide.addLocation(newLocation);
  displayLocationDetails(travelGuide);
  })
})