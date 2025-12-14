// You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

// Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.



// PSEUDO
// - find where odd is using ".indexOf("odd")"
// - creating a for loop to check if any element equals the index found
// - setting the RETURN for true if found, otherwise, false 



function oddBall(arr){

let oddArr = arr.indexOf("odd")
 for (let i = 0; i < arr.length; i ++){
   if (arr[i]=== oddArr){
     return true
   }
 }
  return false
}

// this question is a continuation of the 4th challange, as I looked for a specific value within a array, originally there was some confusion that set me back for I was looking at the odd integer instead ot the word, resulting in a different position but after breaking down the question further, I came to my final result.