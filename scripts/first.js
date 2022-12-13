/*let a = 5;
let b = 10;

let c=a+b;
console.logc);*/

//Arithmetic operators

/*let x=6;
let y=4;

let sum= x+y;
let Subtraction= x-y;
let Multiplication= x*y;
let Division= x/y;
let Modulus= x%y;

console.log(sum, Subtraction, Multiplication, Division, Modulus);*/

//Comparison operators

/*let x=6;
let y=4;

console.log(x>y, x<y, x==y, x!=y, x>=y, x<=y);*/

// conditional statment
/*let age = 30;

if(age>=13 && age<=18){
    console.log('your are "teenager"');
}
else if(age>=19 && age<=29){
    console.log('your are "adult"');
} 
else{
    console.log("your not a teenager or adult");
}*/

// let num=9;
// if(num % 2 == 0){
//     console.log("Divisible by '2'");
// }
// else if(num % 3 == 0){
//     console.log("Divisible by '3'");
// }
// else{
//     console.log("Not Divisible by '2' or '3'");
// }

// let num = 9;
// if(num % 2 == 0 && num % 3 == 0){
//     console.log("Divisible by '2' and '3'");
// }
// else{
//     if(num % 2 == 0){
//         console.log("Divisible by '2'");
//     }
//     else if(num % 3 == 0){
//         console.log("Divisible by '3'")
//     }
//     else{
//         console.log("Not divisible by '2' or '3'")
//     }
// }

//Logical operators

/*let a = 5;
let b = 2;

console.log(a<b && a>b, a<b || a>b, !a<b);*/

//Ternary operators

/*let result = (8<5)?"True":"False";
console.log(result);*/

//increment and decrement operators

// let a = 10;

// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);

// console.log(a)

//switch condition

// let number=2;
//      switch (number){
    //      case 1:console.log("Monday");
    //         break;
//      case 2:console.log("Tuesday");
//         break;
//      case 3:console.log("Wednesday");
//         break;
//      case 4:console.log("Thursday");
//         break;
//      case 5:console.log("Friday");
//         break;
//      case 6:console.log("Saturday");
//         break;
//      case 7:console.log("Sunday");
//         break;
//     default:console.log("invalid number")
//         break;
// }

// break statment

// for(let i = 1; i<=10; i++){
//     if(i==5){
//         break;
//     }
//     console.log(i)
// }

//continue statment

// for(let i = 1; i<=10; i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i)
// }


//for loop(1 to 10)
        
//     for (let i = 1; i<=10; i++) {
//          console.log(i);
    
// }

//for loop(10 to 1)

    // for(let i=10; i>=1; i--){
        
    //     console.log(i);
    // }

    
// Even number odd number

// let evencount=0;
// let oddcount=0;
// for(let i=0;  i<=4; i++);
// {
//     let n = 98;
//     if(n%2==0)
//     {
//        evencount++;
//     }
//     else
//     {
//        oddcount++;
//     }
// }
//     console.log("Even number count is "+evencount);
//     console.log("odd number count is "+oddcount);

//for Each loop

// let number = [1, 2, 3, 4, 5];

// number.forEach((n)=>{
//     console.log(n*2);
// });

//for of loop

// let data=[1,2,3,4,5]

// for(let n of data){
//     console.log(n,data[4])
// }


//for in loop

// let person = {
//     name : 'Praveen',
//     age : '25',
//     job : 'developer'
// }

// for (let key in person){
//     console.log(key);
// }


//while loop

//     let i = 1;
// while (i<=10) {
//     console.log(i);
//     i++;

// }

//Do-while loop

// let i = 1;
// do{
// console.log(i);
//      i++;
// }while(i<=10);

//using forloop multiplication

//     let sum=0;

// for(let i = 1; i<=6; i++){

//     sum=sum+i;
// }
// console.log(sum);

//string length method

// let name ="we are javascript developers!";
//     console.log(name.length);

//string slice method

// let name ="we are javascript developers!";
//      console.log(name.slice(7,18));

//String substring method

// let name ="we are javascript developers!";
//      console.log(name.substring(7,18));
//      console.log(name.substring(name.length - 4));

//string toUpperCase method

    // let name ="we are javascript developers!";

    //  console.log(name.toUpperCase());

// string lower case method

    //  let name ="we are javascript developers!";

    //  console.log(name.toLowerCase());
 
// string concat method

// let data="We Are"
// let name ="we are javascript developers!";

//    console.log(name.concat('',data));

// string split method

// let name ="we are javascript developers!";
// console.log(name.split()); 

//Array pop method

//  let number=[1,2,5,6,8];
//  console.log(number.pop());
//  console.log(number);

//Array push method
 
//  let number=[1,2,5,6,8];
//  console.log(number.push(12)); //length of the array
//  console.log(number);

//Random number print

// let x = Math.random();

// console.log(x);

// let today = new Date();
// console.log(today);

// let dd = today.getDate();
// console.log(dd);

// let mm = today.getMonth()+1;
// console.log(mm);

// let yyyy = today.getFullYear();
// console.log(yyyy);

// let hr = today.getHours();
// console.log(hr);

// let min = today.getMinutes();
// console.log(min);

// let sec = today.getSeconds();
// console.log(sec);

// function printMessage(message){
//     console.log(message);
// }

// function sum(x,y){
//     let SumOFNumbers = x+y;
//     return SumOFNumbers;
// }

// let result = sum(5,3);
// printMessage(result);

// function minus(x,y){
//     console.log(x-y);

// }
// minus(5,3);

// function multiplication(x,y){
//     console.log(x*y);
// }    
// multiplication(5,3);

// function division(x,y){
//    console.log(x/y);
// }
// division(5,3);

// function modulo(x,y){
//    console.log(x%y);
// }
// modulo(5,3);

//Array Map function //Multiplay out put comes Array

// const numArray = [2,4,6,5,8,7]; //constant array
// const newArray =numArray.map((num)=>num * 2); 
// //map function is using to get multiplay of another array num is key

// console.log(newArray); //print new array

//Array filter function

// const numArray =[2,4,5,6,8,12];
// const newArray =numArray.filter((num)=>(num%2==0));

// console.log(newArray);

//Array reduce function

// let numArray = [2,4,5,6,8,12]; //previousvalue and currentvalues taken here
// initialValue = 0; // this is syntax purpose //this is also using add some values
// const newArray = numArray.reduce((previousvalue,currentvalue)=>previousvalue+currentvalue,initialValue);
// //reducing funtion in array 
// console.log(newArray);


//units coverting
//inchesTocm converting

// function inchesTocm(num){
//     return num * 2.54;
// }
//    console.log(inchesTocm(1));

// inchesTocm = (num)=>{
//         return num * 2.54;
//    }
//     console.log(inchesTocm(1));

// inchesToCm=(num)=>num*2.54;
// console.log("Cm " +inchesToCm(1));

//cmToinches Converting

// function CmToinches(num){
//     return num * 0.393701;
// }
// console.log(CmToinches(1));

// CmToinches=(num)=>{
//     return num * 0.393701;
// }
// console.log(CmToinches(1));

// CmToInches=(num)=>num*0.393701;
// console.log("Inch " +CmToInches(1));

//kgTogram Converting

// function KgTogram(num){
//     return num * 1000;
// }
// console.log(KgTogram(1));

// KgTogram = (num) =>{
//     return num * 1000;
// }
// console.log(KgTogram(1));

// KgToGrams=(num)=>num*1000;
// console.log("Grams " +KgToGrams(1));


//GramTokg converting

// function GramTokg(num){
//     return num * 0.001;
// }
// console.log(GramTokg(1));

// GramTokg = (num) =>{
//     return num * 0.001;
// }
// console.log(GramTokg(1));

// GramsToKg=(num)=>num*0.001;
// console.log("Kg " +GramsToKg(1));


//cmTomm Converting//

// function CmTomm(num){
//     return num * 10;
// }
// console.log(CmTomm(1));

//  CmTomm = (num)=>{
//     return num * 10;
// }
// console.log(CmTomm(1));

// CmToMm=(num)=>num*10;
// console.log("mm " +CmToMm(1));

//mmTocm Converting//

// function MmTocm(num){
//     return num * 0.1;
// }
// console.log(MmTocm(1));

// MmTocm = (num)=>{
//     return num * 0.1;
// }
// console.log(MmTocm(1));

// MmToCm=(num)=>num*0.1;
// console.log("Cm " +MmToCm(1));


//using forEach for sum// 

// let numsArr=[1,3,4,5];

// function arraySum(){
//     let sum=0;
//     numsArr.forEach(num=>{
//         sum=sum+num;
//     })
//     return sum;
// }
// console.log(arraySum());


//calling function using this calling object //

// let person = {
//     name : "Raju",
//     age  : 24,
//     profession : "developer",

//     printFullName: function(){
//         console.log(this.name +" age " + this.age);
//     }
// }
// person.printFullName();
// let name = {
//     name : "Rani",
//     age  : 21,  
// }
// person.printFullName.call(name);


//  let str ="good developers";
//  str.split(" ").forEach(word=>{
//  let lowerWord = word.toLowerCase();
//  console.log(str[0].toUpperCase()+lowerWord.slice(1));  
// });

//split,slice,toUpperCase,toLowerCase practice//

// let str ="good developers";
// console.log(str.split(" "));
// console.log(str.split());
// console.log(str.split(""));
// console.log(str.slice(0,4));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//Each word capital function//

// function capitalize(word){
//     let lowerWord = word.toLowerCase();
//     return lowerWord[0].toUpperCase()+lowerWord.slice(1);
// }
// let str = "we Are good devalopers";
// str.split(" ").forEach(word => console.log(capitalize(word)));

// let greeting ="hello all of you";
// console.log(capitalize(greeting));

//Each Word Capitalize//

// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");
// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// };

// console.log(words);


