// Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

// Example
// input: "abcd", [0, 3, 1, 2]
// output: "acdb"

// PSEUDO
// - using the given FUNC function scramble(str, arr) {}
// - identify/create a array, let result =[]
// _ create a for loop to run through 
// - set [i] to move to its new position and join with "", creating a string instead.

function scramble(str, arr) {
let result = []
  
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  
  return result.join("")
}

// is this particular question, I was given the task to place something new instead of retrieving from an array and use a method like join to convert it to string, expanding my thought proccess to think differently from my past problems.