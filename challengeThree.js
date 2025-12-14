// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.




// PSEUDO
// - using CONST "quarterOf = (month) =>", for month 1-12,
//  return them to their corresponding term 1-4
// - IF in Month 1-3, RETURN 1
// - ELSE IF, Month 4-6, RETURN 2
// - ELSE IF, Month 7-9, RETURN 3
// - ELSE, RETURN 4

const quarterOf = (month) => {
if (month >= 1 && month <= 3) {
  return 1;
}
  else if (month >= 4 && month <= 6) {
    return 2
  }
  else if (month >=7 && month <=9) {
    return 3
  }
  else{return 4}
}

// This code allowed me to continue my ongoing practice with if/else statements while also implementing "&&" within the condition to add a more concise result between two numbers.