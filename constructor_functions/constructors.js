// Recap on creating objects.
var myObject = {
  sqFeet: 2000,
  bathrooms: 2,
  bedrooms: 3
}

var anotherObject = Object.create( myObject )


// Constructors
var House = function( sqFeet, bathrooms, bedrooms ) {
  this.sqFeet = sqFeet;
  this.bathrooms = bathrooms;
  this.bedrooms = bedrooms;
  this.numberOfRooms = function() {
    return this.bathrooms + this.bedrooms
  }
}

var house1 = new House( 2000, 2, 4);
var house2 = new House(4000, 3, 6);

console.log( house1.numberOfRooms() );
console.log( house2.numberOfRooms() );


// 
var Office = function( sqFeet, floors, meetingRooms ) {
  this.sqFeet = sqFeet;
  this.floors = floors;
  this.meetingRooms = meetingRooms;
  this.avgMeetingRooms = function() {
    return this.meetingRooms / this.floors
  }
}

var office1 = new Office( 1000, 3, 10 );

console.log( office1.avgMeetingRooms() );