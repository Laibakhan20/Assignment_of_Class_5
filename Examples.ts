// "THIS IS MY ASSIGNMENT OF TODAY'S CLASS !"


// HERE I'M GIVING EXAMPLES OF NAMING CONVENTONS, DATATYPES, AND ARRAYS!


// 1. EXAMPLE OF VARIABLE NAMING CONVENTIONS:
//There are 3 types of variable naming conventions in typescript:

// "camelCase":
let userProfile : string = "Laiba";
console.log(userProfile);

// "snake_case":
let user_profile : string = "Abdullah";
console.log(user_profile);

// "PascalCase":
let UserProfile : string = "Nazia";
console.log(UserProfile);


// 2. EXAMPLES OF DATATYPES :
// There are 7 primitive datatypes :

// "STRING":
// "string represents a sequence of character."
let countryName : string = "Pakistan";
console.log(countryName);
 let cityName : string = "Karachi";
 console.log("I live in " + cityName, "which is the city of " + countryName);

 // "NUMBER":
 // "number datatype represents both integars and floating-point numbers."
 let rollNumber : number = 700 ;
 console.log(rollNumber) ;
let a : number = 8 ;
let b : number = 1 ;
console.log("a = ", a , "and b = ", b);
console.log("a + b = ", a + b);
console.log("a / b = ", a / b);

// "BOOLEAN":
// "boolean represents true or false."
let isAbsent : boolean = true ;
console.log(isAbsent);
let submitted : boolean = false ;
console.log(submitted);

// "UNDEFINED":
// undefined variable indicates an uninitialized variable.
let anyWord ;
console.log(anyWord);

// "NULL":
// Null datatype denotes when an object has no value.
let object : null = null ;
console.log(object);

// "ANY" :
//  The any datatype is a dynamic type in TypeScript.It can hold values of any type, and TypeScript does not perform type checking on them.
let myAnyObject : any = 'Hello, Typescript!'
console.log(myAnyObject);
myAnyObject = 2024 ;
console.log(myAnyObject);
myAnyObject = true ;
console.log(myAnyObject);

// "BIGINT" :
//  BigInt datatype represent whole numbers larger than the maximum value that can be accurately represented using the standard Number data type:
let bigIntValue = BigInt("12345678910") ;
console.log(bigIntValue);


// 3. EXAMPLE OF ARRAYS:
// arrays is the datastructre which stores collection of elements.
let pslTeams : string[] = ["Karachi Kings", "Islamabad United", "Quetta Gladiators"];
console.log(pslTeams);
console.log("I am supporting ", pslTeams[2], "in this PSL season.");

let favFruits : any[] = ["Watermelon", "Mango", "Pomegranate", "Melon" , "Apple"];
console.log(favFruits);
console.log(favFruits[0] , favFruits[1] , favFruits[2] , "are my favourite fruits.")

let myBrotherAge : number[] = [4 , 5 , 8 , 9];
console.log(myBrotherAge);
console.log("My younger brother is ", myBrotherAge[2], "years old.");


//                         AND THAT'S A WRAP !

// "In conclusion, your feedback is valueable, and I'm here to listen."