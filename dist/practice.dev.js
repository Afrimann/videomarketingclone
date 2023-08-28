"use strict";

var x, y, total, user_age, user_birthyear;
user_age = parseInt();
user_birthyear = parseInt();
x = 5;
y = 6;
total = x + y;
console.log(total);
var names = {
  firstName: "John",
  lastName: "Doe"
};
var ages = {
  user_age: user_age,
  user_birthyear: user_birthyear
};
console.log(names);
console.key();
console.log(ages);
var carName = ["Maybach", "Ferrari", "Buggati"];
console.log(carName); //a javascript function is a blcok a code designed to perform a particular task

function myFunction(p1, p2) {
  return p1 * p2;
}

function toCelcius(fahrenheit) {
  return 5 / 9 * (fahrenheit - 32);
}

var celc_gen = toCelcius(77);
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function fullName() {
    return this.firstName + " " + this.lastName;
  }
};
var human = {
  firstName: "peter",
  middlename: "oluwadarasimi",
  lastName: "omotosho",
  age: "20",
  lev_edu: "200level",
  fullName: function fullName() {
    return this.firstName + " " + this.lastName;
  }
};
var myString = "this ia a play text";
var strlen = myString.length;
var min = "locatr where 'locate occurs'";
len = min.indexOf("locate");
var fruits = "Apple,Banana,Mango";
var reduced = fruits.slice(2, 10);
console.log(reduced);
tct = "i am transforming you";
big_tct = tct.toUpperCase();
var _char = "Hello";

var arr = _char.split("");

var i, mytxt;

for (i = 0; i < arr.length; i++) {
  mytxt += arr[i];
}

var cars = ["saab", "volvo", "toyota"];
var speed = ["200", "300", "400"];

for (var _i = 0; _i < cars.length; _i++) {
  var car_name = cars[_i];

  for (var j = 0; j < speed.length; j++) {
    var speed_per_car = speed[j];
    console.log(car_name + ' ' + speed_per_car);
  }
}

cars[cars.length] = "Mercedez"; // or

cars.push("Mercedez"); // how to recognize an array 
// typeof operator will always return object because javascript arrays are objects
// instead e use the Array.isArray(array) method
// or wecan us the instanceof() method

var fruit = ["banana", "mango", "orange"];
var mytext = fruit instanceof Array;
document.getElementById('demo').innerHTML = mytext; // arrays use numbers(index) to access its elements while objects use names to access its elements
// array methods
// tostring()
// u can also use the join() to turn the array elements into a list of strings separated by something, here you can determine what it is seperated by but not with toString()
// popping and pushing
// popping removes the last element in the array

fruit.pop(); // push adds new element to the end of the array

fruit.push("kiwi"); // it returns the length of the new array
// the shift() removes the first element of the array
// unshift() adds a new element at the beginning of the array and "unshifts " older element.
// merging or concatenation of arrays

var myBoys = [];
var myGirls = [];
var myPeople = myBoys.concat(myGirls); // slice slices a part of a array into a new array, it does not remove any element from the original array rather, it sices them into new array leaving the original unchanged.
// sorting an array we use the sort() function
// to reverse the order of an array we use the reverse() function.
// numeric sort

var myPoints = [1, 2, 4, 5,, 2, 0];
myPoints.sort(function (a, b) {
  return b - a;
}); // array iteration

var myNumber = [1, 2, 3, 4, 5];
var myNumber2 = myNumber.map(myfunction);

function myfunction(value) {
  return value * 2;
} // array filter passes a new array of elements that passes a test.


var myage = [2, 19, 20, 34, 59, 3, 50, 12, 18];
var myage_eligible = myage.filter(myfunc);

function myfunc(value) {
  return value >= 18;
} //  array to single value (reduce)


var reduce = myage.reduce(func);

function func(total, value) {
  return total + value;
} // GO BACK TO ARRAY ITERATION
// DATE AND DATE METHODS


var today_s_date = new Date(); // GO BACK TO DATE AND ITS METHODS
// MATH
// ARROW FUNCTION
// instead of 

hello = function hello() {} // code to be executed
// we can use
;

hellos = function hellos() {
  return "this is default";
};