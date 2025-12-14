// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.


// PSUEDO

// - Using function arrayDiff(a, b) {},
// - I'll remove all elements in a that also exist in array b, only returning what's left of a
// - Using filter() first to keep the elements within array a once the function returns true
// - Creating a condition checking if array b includes the element returning true or false



function arrayDiff(a, b) {
  return a.filter(function(element) {
    return !b.includes(element)
  });
}

// This question helped me use my prior knowledge to create a true or false statement with my new knowledge of methods like filter() and Include(), as well as "!" to shorten my code !