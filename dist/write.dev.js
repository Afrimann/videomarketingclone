"use strict";

window.addEventListener("click", function (event) {
  event.preventDefault();

  function validate(elem, help) {
    var elem_len = elem.value.length;

    if (elem_len <= 20 || elem_len) {
      alert(help);
      return false;
      elem.focus();
    } else {
      return true;
    }
  }
});
var person = {
  firstname: "Peter",
  Lastname: "Omotosho",
  age: 20
};

for (x in person) {
  txt += person[x];
  document.getElementById('myDemo').innerHTML = txt;
}

person.nationality = "Nigerian";
delete person.nationality;
var myInfo = {
  firstName: "Peter",
  LastName: "Omotosho",
  otherNames: "Oluwadarasimi",
  age: 20,
  natonality: "Nigerian",

  get name_age() {
    return this.name + " " + this.age;
  },

  fullName: function fullName() {
    return this.firstName + " " + this.otherNames + " " + this.LastName;
  }
}; // display the data.

document.getElementById('demo').innerHTML = myInfo.name_age;
var myInf = {
  firstName: "Peter",
  LastName: "Omotosho",
  otherNames: "Oluwadarasimi",
  age: 20,
  natonality: "Nigerian",
  language: "",

  get name_age() {
    return this.name + " " + this.age;
  },

  set lang(lang) {
    this.language = lang.toUpperCase();
  },

  fullName: function fullName() {
    return this.firstName + " " + this.otherNames + " " + this.LastName;
  } // display the data.

};
myInf.lang = "en";
document.getElementById('myydemo').innerHTML = myInfo.lang;
var objec = {
  counter: 0
}; // define the setters   

Object.defineProperty(objec, "reset", {
  get: function get() {
    this.counter = 0;
  }
});
Object.defineProperty(objec, "increment", {
  get: function get() {
    this.counter++;
  }
});
Object.defineProperty(objec, "decrement", {
  get: function get() {
    this.counter--;
  }
});
objec.reset;
objec.add = 5;
objec.decrement;

function myPerson(first, last, other, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.otherName = other;

  this.fullname = function () {
    return first + " " + last;
  };
}

var myself = new myPerson("Person", "Omotosho", "Oluwadarasimi", 20);
Object.defineProperty(myself, "name", {
  get: function get() {
    this.first + " " + this.last;
  }
});
Object.defineProperty(objec, "userName", {
  get: function get() {
    this.age + " " + this.otherName;
  }
});

function add() {
  var counter = 0;

  function plus() {
    counter += 1;
  }

  plus();
  return counter;
}