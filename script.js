// const user = {

//     firstname : 'subhadip',
//     lastname : 'jana',
//     city : {
//         town : 'dombivli',
//         pincode : 421201
//     }
// }

// user.age = 12;

// console.log(user);

// const fruits = ['apple', 'banana', 'grapes']
// const vegetables = ['cabbage', 'carrot', 'potato']

// const combarray = fruits.concat(vegetables)

// console.log(combarray);

// let ages = [83, 26, 32, 13, 23, 3, 36, 28, 64, 48];

// ages.push(19);
// console.log(ages);

// ages.unshift(22);
// console.log(ages);

// ages.splice(3, 1, 17)
// console.log(ages);

// ages.sort((a, b) => a - b);
// console.log(ages);

// ages.reverse()
// console.log(ages);

// ages = ages.slice(1, ages.length -1);
// console.log(ages);

// const includesAge = ages.includes(19);
// console.log(includesAge);

// const ageIndex = ages.indexOf(19);
// console.log(ageIndex);

// const event1Participants = ["Alice", "Bob", "Charlie"];

// const event2Participants = ["David", "Eve", "Frank"];

// const bothEventParticipants = event1Participants.concat(event2Participants);
// console.log(bothEventParticipants);

// const weeklyTemperatures = [72, 75, 79, 83, 78, 74, 70];

// const midWeekTemp = weeklyTemperatures.slice(1, 4);
// console.log(midWeekTemp);

// const nestedArray = [
//   [[1, 2], 3, 4],

//   [5, [6, 7], 8],

//   [9, 10, [11, 12]],
// ];

// console.log(nestedArray[0][0]);
// console.log(nestedArray[1][1]);
// console.log(nestedArray[2][2]);

// let i = 0;

// while (i <= 100){
//   console.log(i);
//   i++;
// }

// const fruits = ['apple', 'banana', 'grapes', 'orange', 'watermelon'];

// for(let i = 0; i < fruits.length ; i++){
//   console.log(`${(i+1)}. ${fruits[i]} fruit`);
// }

// const arr = [5, 10, 2, 8, 15]

// let maxNum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxNum) {
//     maxNum = arr[i];
//   }
// }

// console.log(maxNum);

// let string = 'hello';
// let reverseString = ''

// for (let i = string.length -1 ; i >= 0 ; i--) {
//   reverseString += string[i];
// }

// console.log(reverseString);

// let count = 0;
// let string = 'javascript'

// for (let k = 0 ; k < string.length ; k++) {
//   if (string[k] === 'a'|| string[k] === 'e' || string[k] === 'i' || string[k] === 'o'|| string[k] === 'u'){
//     count++
//   }
// }

// console.log(count);

// for(i= 0; i< 10; i ++){
//   console.log(i + 1);
// }

// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// for(let i= 2; i <=10; i++){
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

// function greet(name = 'procodrr', occupation = 'student') {
//   console.log("Hi");
//   console.log(`My name is ${name}`);
//   console.log(`I am ${occupation}`);
// }

// greet("Subhadip", "Software developer");
// greet();

// function sum(a, b){
//   return a + b;
// }

// const result = sum(sum(2,6), sum(4,8));
// console.log(result);

// function calculateArea(shape, dimension) {
//   shape.toLowerCase();
//   if (shape === "rectangle") {
//     if (dimension.length === 2) {
//       return `Area of the rectangle ${dimension[0] * dimension[1]}`;
//     } else {
//       return "Enter proper dimension";
//     }
//   } else if (shape === "circle") {
//     if (dimension.length === 1) {
//       return `Area of the circle ${Math.round(Math.PI * Math.pow(dimension[0], 2))}`;
//     } else {
//       return "Enter proper dimension";
//     }
//   } else if (shape === "right-triangle") {
//     if (dimension.length === 2) {
//       return `Area of the right angle triangle ${0.5 * (dimension[0] * dimension[1])}`;
//     } else {
//       return "Enter proper dimension";
//     }
//   } else {
//     return "Enter a proper shape";
//   }
// }

// console.log(calculateArea("rectangle", [5, 10]));
// console.log(calculateArea("circle", [7]));
// console.log(calculateArea("right-triangle", [3, 4]));

// const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "0123456789";

// const
//  allCharacters = uppercaseLetters + lowercaseLetters + numbers;

// let password = "";
// for (let i = 0; i < 8; i++) {
//   const randomIndex = Math.floor(Math.random() * allCharacters.length);
//   password += allCharacters[randomIndex];
// }

// console.log(password);

// for (let i = 1; i <= 100; i++) {
//   if (i <= 1) continue;
//   if (i <= 3) {
//     console.log(i);
//     continue;
//   }
//   if (i % 2 === 0 || i % 3 === 0) continue;
//   let isPrime = true;
//   for (let j = 5; j * j <= i; j += 6) {
//     if (i % j === 0 || i % (j + 2) === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

// const number = 5;
// let result = 1;

// for (let i = 1; i <= number; i++) {
//   result *= i;
// }

// console.log(`The Factorial of ${number} is ${result}`);

// let str = ' Horray! ';
// console.log(str.indexOf('r'));
// console.log(str.trim());

// const username = 'Subhadip Jana';
// console.log(`My name is ${username}`);

// let number = 3.1;

// // Using Math.floor()
// let roundedDown = Math.floor(number);
// console.log(roundedDown); // roundedDown will be 3

// // Using Math.ceil()
// let roundedUp = Math.ceil(number);
// console.log(roundedUp); // roundedUp will be 4

// let result = "hello" - 5;

// console.log(result);

// console.log(5 > 6 > 7);

// let x = 5;

// let y = "5";

// let z = 10;

// console.log(x != y);

// console.log(x != z);

// console.log(y != z);

// const logicalOperator = true && false

// console.log(logicalOperator)

// console.log(1 && 2 && null && 3)

// let a = "";

// let b = 0;

// let c = false;

// console.log(a && b || c || "fallback");

// const num = 3;

// if(num % 2 == 0){
//   console.log('even');
// }

// if(num % 2 != 0){
//   console.log('odd');
// }

// const a = 10;
// const b = 12;
// const c = 34;

// if(a > b && a > c){
//   console.log(`${a} is greatest`);
// }
// else if(b > a && b > c){
//   console.log(`${b} is greatest`);
// }
// else {
//   console.log(`${c} is greatest`);
// }

// const favColor = "Red";

// switch (favColor.toLocaleLowerCase()) {
//   case "red":
//     console.log("Red is a passionate color!.");
//     break;
//   case "blue":
//     console.log("Blue is calming and serene.");
//     break;
//   case "green":
//     console.log("Green symbolizes nature and growth.");
//     break;
//   default:
//     console.log(`${favColor} is also my favorite color`);
//     break;
// }

// sayHii()

// const username = 'Subhadip';
// let userAge = 23;
// var a = 50;

// function sayHii(){
//   const a = 12;
//   const b = 243;
//   add(12, 17)
// }

// function add(){
//   const x = 16;
//   const y = 12;
//   console.log(x + y);
// }

// add();

// function sub(){

//   const x = 26;
//   const y = 22;
//   const z = 28;
//   console.log(x - y);
//   function child(){

//     const childName = 'golu';
//     console.log(childName);
//     console.log(z);

//     {
//       let num1 = 12;
//       console.log(num1);

//     }

//     function grandchild(){
//       const grandChildName = 'molu';
//       console.log(grandChildName);
//     }
//     grandchild();

//   }
//   child()
// }

// sub();

// function introduce(){
//   console.log("hi my name is Subhadip");
// }

// introduce()

// function a(b) {
//   console.dir(b);
//   b();
// }


// function sayHii(){
//   console.log('Hiiiiiiiiiiiiii');
// }

// a(sayHii)


const timer1 = setTimeout(`console.log('hi-1')`, 1000);
const timer2 = setTimeout(`console.log('hi-2')`, 2000);
const timer3 = setTimeout(a, 3000);

function a(){
  console.log('Hello world');
}

