// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// exc...

// Note: For 4 or more names, the number in "and 2 others" simply increases.



// PSEUDO
// -function likes(names) {
// - create a switch staetment checking the .length to compare against each of the following if/case statements
// - case 0, return, "no one likes this"
// - 1, return, names[0] + " likes this"
// - 2, return, names[0] + " and " + names[1] + " like this"
// - 3, return names[0] + ", " + names[1] + " and " + names[2] + " like this"

// - last statement/else, for anything 4 or more, stating the first two names and the rest of the names using length afterwards, names[0] + ", " + names[1] + " and " + others + " others like this";
// }


function likes(names) {


switch(names.length) {
    case 0:
      return "no one likes this";
    
    case 1:
      return names[0] + " likes this";
    
    case 2:
      return names[0] + " and " + names[1] + " like this";
    
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    
    default:
      let others = names.length - 2;
      return names[0] + ", " + names[1] + " and " + others + " others like this";
  }
}

// this question challenged me to think further than the if/else statements and implement switch, tasking multiple results and even shortening the display results for users once the return exceeded the name count asked.