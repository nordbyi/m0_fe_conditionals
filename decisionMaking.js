// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 'friendship ending!';

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// We have a conditional if else statement that checks to see if the value stored in doorChoice is 1.
// If so the value of bearClothing becomes 'hat', else if the value is anything other than 1 the value
// of bearClothing becomes 'scarf'

// 2. What variable has a new value assigned to it after the first if statement executes?
// bearClothing

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// 'scarf'

// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
// We have an if else statement that also contains a couple 'else if' steps. if the value stored in bearChoice is 1, 2 or 3,
// the console will log whichever statement evaluates to true (because I added all the missing console.log()s!). If none
// of them evaluate to true, the catch-all else statement will execute and log that you are now the bear's best friend!

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// Originally nothing, now it will log "You run as fast as you can into the next room. It's full of snakes!"

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// Originally nothing, with the console.log() it will say "You tell the bear the hat is too small and it starts to cry!"

// 7. What is your favorite ending?
// Obviously becoming the bear's best friend!
