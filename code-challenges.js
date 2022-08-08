// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
//const fruit1 = "apple"
//const fruit2 = "banana"

// Set two:
//const fruit3 = "cherry"
//const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:

  //Function: boiling point
  //parameter: Any given number
 //expected outout: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
 //conditional statements:if the tempetaure is at boiling point it will return its at its boiling point. If its above it boiling point it will return its above its boiling point. If it below its temp it will return below temp
    

 const temp1 = 42
 const temp2 = 350
 const temp3 =  212

const boilingPoint = (temps) => {
   if(temps < 212) {
   return "Its below boilingpoint"
  } else if(temps > 212) {
    return "Its above boilingpoint"
   }else if(temps === 212) {
    return "Its hot in here"
   }
 }
    console.log(boilingPoint(temp1))
   console.log(boilingPoint(temp2))
    console.log(boilingPoint(temp3))
 





// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:

//Function: My two arrays 
//parameter: looking for the length using the variable provided
 //expected outout: 10
 //string cocatenation: using this method th cobine my two arrays together

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const merged = myNumbers1.concat(myNumbers2);

console.log(merged.length); // [3, 7, 0, 36, -9 ,8, -7, 42, 9, 13]
console.log(myNumbers1.length); // [3, 7, 0, 36, -9]
console.log(myNumbers2.length); // [8, -7, 42, 9, 13]

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
//function: reverse the string please
 //parameter: The string
 //expected output: "2202 ohcE"
//   console.log the "currentCohort" so the computer can execute the string value in reverse.

var letters = ["e","c", "h","o","2","0","2","2"];
console.log(letters.join);

const currentCohort = (letters.reverse);

console.log(currentCohort);


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:

 //function: filter odd or even numbers
 //expected output: odd or even
 // condition is any number in an array divided by 2 will have a remainder 0 which will make the number even or odd.




// const myArray = [13, 34, 5, 10, 27, 42]

 
// for(let i = 0; i < myArray.length; i++) {
//     const number= myArray[i]
//  if (number % 2== 0) {
//    console.log("The number even");
//  } else { 
//         console.log("number is odd")
//  }
// }

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
 //function: The set of numbers provided to me
 //parameter: subtractin the samller number from the larger number
 //expected output: 42,3
 // comsole.log the the subtracted numbbrs by sammler number minus larger number

//  Set one:
// const number1 = 58
// const number2 = 100

// // Set two:
// const number3 = 27
// const number4 = 24

//  const bools=(number1,number2)
//  console.log(number1 - number2)
    
//  const books =(number4,number2)
//  console.log(number4- number3)
    


