// Complete function saleHotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90


// PSEUDO
// FUNC saleHotdogs (n){
//     - IF the number is less than 5, n*100
//     - ELSE IF, number is equal to 5 or less than 10, n*95
//     - ANTHING ELSE, greater than/equal to 10, Return n*90
// }


function saleHotdogs(n){
  if (n < 5)
    return n * 100
  else if (n >= 5 && n < 10)
    return n * 95
  else(n >= 10)
  return n * 90
}

// This function allowed me to practice my if/else statements while exercising my thought process for the return statement given, the price was per unit and not total, requiring multiplication.


