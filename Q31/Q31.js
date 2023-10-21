"use strict";
const usernams = ['admin', 'Eric', 'Alice', 'John', 'admin123']; // Replace with your usernames
if (usernams.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < usernams.length; i++) {
        if (usernams[i] === 'admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${usernams[i]}, thank you for logging in again.`);
        }
    }
}
// Removing all usernames from the array
usernams.length = 0;
if (usernams.length === 0) {
    console.log("We need to find some users!");
}
