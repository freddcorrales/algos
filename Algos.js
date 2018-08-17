//Algos in JS

//1. Setting and Swapping
//Set myNumber to 42. Set myName to your name.
//Now swap myNumber into myName & vice versa.

let myNumber = 42;
let myName = "Freddy";
console.log(myNumber);
console.log(myName);
var temp = myNumber;
myNumber = myName;
myName = temp;
console.log(myNumber);
console.log(myName);

//2. Print and Count
//Print all integer multiples of 5, from 512 to 4096.
//Afterward, also log how many there were.

function printAndCount(){
  for (let i = 512; i < 4096; i++){
    if (i % 5 === 0){
      console.log(i)
    }
  }
}
printAndCount()

//3. Print -52 to 1066

function printAndCount(){
  for (var i = -52; i < 1066; i++){
    console.log(i);
  }
}
printAndCount()

//4. Multiples of Six

function mult(){
  var num = 6;
  while(num < 60000){
    if (num % 6 === 0){
      console.log(num);
    }
    num += 1; 
  }
}
mult();

//5. Don’t Worry, Be Happy
//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(){
  console.log("good morning");
}
beCheerful()

//6. Multiples of 3
//Using FOR, print multiples of 3 from -300 to 0.
//Skip -3 and -6.

function multThree()
{
  for (var i = -30; i < 0; i++)
  {
    if (i === -3 || i === -6){
      continue;
    }
    if (i % 3 === 0)
    {
      console.log(i);
    }
  }
}
multThree();

//.7 Counting, the Dojo Way
//Print integers 1 to 100. If divisible by 5, print
//"Coding" instead. If by 10, also print " Dojo".
function DojoWay()
{
  for (var i = 0; i < 100 ; i ++)
  {
    if (i % 5 === 0)
    {
      console.log("Coding")
    }
    if(i % 10 === 0)
    {
      console.log("Dojo")
    }
    if(i % 5 !== 0 && i % 10 !== 0){
      console.log(i);
    }
  }  
}
DojoWay();

//.8􏰀What Do You Know?
//Your function will be given an input parameter incoming. Please console.log this value.

function incoming(num){
  console.log(num);
}
incoming(5);


//9.Add odd integers from -300,000 to 300,000, and console.log the final sum. 

function sumOdd(){
  var sum = 0;
  for (var x  = -300000; x < 300000; x++){
    if(x % 3 === 0){
      sum += x;
    }
  }
  console.log(sum);
}
sumOdd();

//10. Printing Integers with While Loop
//Print integers from 2000 to 5280, using a WHILE.
function integers(){
  var num = 2000;
  while(num < 5280){
    console.log(num);
    num ++;
  }
}
integers();

//11. If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."
function birthday()
{
  var birthDay = Math.floor((Math.random() * 31) + 1);
  var birthMonth = Math.floor((Math.random() *12) + 1);
  if (birthDay === 1 || birthMonth === 10) 
  {
    console.log("How did you know?")
  } 
  else 
  {
  console.log("Justher day…")
  }
  console.log("Birthday = " + birthDay, "Birth Month number = " + birthMonth)
}
birthday();

//12. Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(yr){
  if (yr % 400 === 0){
    console.log("This is a leap year");
  }
  if (yr % 4 === 0 && yr % 100 === 0){
    console.log("This is not leap year");
  }
  if (yr % 4 === 0 && yr % 100 !== 0){
    console.log("This is a leap yer");
  }
  else {
    console.log("This is not a leap year")
  }
}
leapYear(yr);

//13. 
//Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For ///(2,9,3), print 9 6 3 (on successive lines).
function flexCount(lowNum, highNum, mult){
  for (var x = highNum; x > lowNum ; x-- ){
    if(x % 3 === 0){
      console.log(x)
    }
  }
}
flexCount(2, 9, 3);

//14. The Final Countdown
//This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function finalCountdown(param1,param2,param3,param4){
  for (var x = param2; x < param3; x++){
    if (x === param4){
      continue;
    }
    else{
      if(x % param1 === 0){
        console.log(x);
      }
    }
  }
}
finalCountdown(3,5,17,9);

//Whith While LOOP
function finalCountdown(param1,param2,param3,param4)
{
  var i = param2;
  while(i < param3)
  {
    if(i != param4 && i % param1 == 0)
    {
      console.log(i);
    }
      i++;
  }
}
finalCountdown(3,5,17,9);

//Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from
// the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countDown(num){
  var newArray = [];
  for (var i = num; i >= 0; i--){
    newArray.push(i);
  }
  return newArray;
}
countDown(10);

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.
function recReturn(arr){
  for (var i = 0; i < arr.length; i++){
    if(i === 0){
      console.log(arr[i]);
    }
    if (i === 1){
      return arr[i];
    }
  }
}
recReturn([1,20]);

//First Plus Length
function firstPlusLength(arr){
  for (var i = 0; i < arr.length; i++){
    if (i === 0 && typeof arr[i] !== "number"){
      break;
    }
    if(i === 0 && typeof arr[i] === "number"){
      return arr[i] + arr.length;
    }
  }
}
firstPlusLength(["fredd",1,2,3])

//Values Greater than Second
//For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
function greaterThanSecond(arr){
  var count = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > arr[1]){
      console.log(arr[i]);
      count += 1;
    }
  }
  return count;
}
greaterThanSecond([1,3,5,7,9,13])


//Values Greater than Second, Generalized
//Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
function greaterThanSec(arr){
  var count = 0;
  var newArray =[];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > arr[1]){
      console.log(arr[i]);
      count += 1;
      newArray.push(arr[i]);
    }
  }
  console.log(count);
  return newArray;
}
greaterThanSecond([1,3,5,7,9,13])


// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
function lengthValue(num1, num2)
{
  var newArray = [];
  for (var i = 0; i < num1; i++)
  {
    if(num2 === num1)
    {
      console.log("Jinx!")
      break;
    }
    else{
      newArray.push(num2);
    }
  }
  return newArray;
}
lengthValue(2,3)

//Fit the First Value
//Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!";
//if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
function firstValue(arr){
  if (arr[0] === arr.length ){
    console.log("Just Right")
  }
  if(arr[0] > arr.length){
    console.log("Too Big");
  }
  if(arr[0] < arr.length){
    console.log("Too small");
  }
}
firstValue([10,1,3])



//Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees){
  var Celsius = cDegrees;
  var Fahrenheit = (9/5 * Celsius) + 32;
  return Fahrenheit;
}
celsiusToFahrenheit(10)

// Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees){
  // var Celsius = fDegrees;
  // var Fahrenheit = (9/5 * Celsius) + 32;
  // return Fahrenheit;
  var Fahrenheit = fDegrees;
  var Celsius = (Fahrenheit - 32) * 5/9;
  return Celsius;
}
fahrenheitToCelsius(70)

//Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
function biggieSize(arr){
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      newArr.push(arr[i]);
    }
    if (arr[i] > 0){
      arr[i] = "big";
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
biggieSize([-1,3,5,-5]);

//􏰀Print Low, Return High
//Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
function lowHigh(arr)
{
  var min = arr[0];
  var max = arr[0];
  for (var i = 1; i < arr.length;i++){
    if (arr[i] < min){
      min = arr[i];
    }
    if (arr[i] > max){
      max =  arr[i];
    }
  }
  console.log(min);
  return max;
}
lowHigh([7,1,3,4,11]);

//􏰀Print One, Return Another
//Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.
function printOne(arr) 
{
  var odd = arr[0];
  if (arr.length == 0) {
    console.log("This array is empty!");
  }   
  else if (arr.length == 1) {
    console.log("There is only 1 element in this array");
  } 
  else 
  {
    for (var i = 0; i < arr.length; i++) 
    {
      if (arr[i] % 2 == 1) 
      {
        odd = arr[i];
        break;
      }
    }
  }
  console.log(arr[arr.length-2]);
  return odd;
}
printOne([12,2,8,11,68,420]);

//You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

function previousLength(arr)
  {
    var newArray = [];
    
    if (arr.length === 0){
      console.log("This is an empty array")
    }
    else
    {
      for (var i = 0; i < arr.length; i++)
      {
        if (arr[i] === 0){
          newArray.push(arr[i]);
        }
      }
    return newArray; 
    }
  }
previousLength([])