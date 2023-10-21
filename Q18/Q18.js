"use strict";
const placesToVisit = ["Paris", "Tokyo", "New York", "Bali", "Rome"];
// Print original order
console.log("Original Order:", placesToVisit);
// Print alphabetical order without modifying the original list
const alphabeticalOrder = placesToVisit.slice().sort();
console.log("Alphabetical Order:", alphabeticalOrder);
// Print original order again
console.log("Original Order:", placesToVisit);
// Print reverse alphabetical order
const reverseAlphabeticalOrder = placesToVisit.slice().sort().reverse();
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
// Print original order again
console.log("Original Order:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order again to restore the original order
placesToVisit.reverse();
console.log("Restored Order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
