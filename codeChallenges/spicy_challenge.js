// Using the following variables:
//
goodDrivingRecord = false
isOver25 = false
// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
//
// If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// If the user either has a good record or is over 25 years old, they should pay full price
// If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

if (goodDrivingRecord && isOver25) {
  console.log('You get a discount')
} else if (!goodDrivingRecord && !isOver25) {
  console.log("You need someone else to sign for this rental")
} else {
  console.log('You get the normal price')
}





















// if (goodDrivingRecord && isOver25){
//   console.log("You get a discount on the car rental!")
// } else if (!goodDrivingRecord && !isOver25) {
//   console.log("You need to have someone else sign for the rental")
// } else {
//   console.log("You pay the normal price")
// }
