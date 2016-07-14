var wisePerson = {
  wisdom: function(){
    console.log( "commit often" );
  }
}

var myPerson = Object.create(wisePerson);

myPerson.walk = function(){
  console.log("left right left right");
}

myPerson.wisdom();


// 
var Fish = function(name, colour){
  this.name = name;
  this.colour = colour;
}

Fish.prototype = {
  swim: function(){
    console.log("splash");
  }
}

var fish1 = new Fish("Nemo", "orange");
var fish2 = new Fish("Nemo2", "blue");
var fish3 = new Fish("Nemo3", "red");
fish1.swim()

var eel = Object.create(Fish.prototype);

console.log(eel.swim());

console.log(Object.getPrototypeOf(eel));


