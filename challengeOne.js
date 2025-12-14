// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.



// PSEUDO

// FUNC sum(numbers){
//     - define SUM and set it to 0
//     - call all the number within the array NUMBERS to run through the condition
//     - Return the new SUM
// }


function sum (numbers) {
  let sum = 0
numbers.forEach(function(number){
  sum += number 

})
return sum
}

// This problem allowed me to use my prior knowledge to identfy what we were looking for and apply the newly learned method (.forEach) to avoid creating a literal code and experiment with an alternative solutions.