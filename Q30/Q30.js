"use strict";
const usernames = ['admin', 'Eric', 'Alice', 'John', 'admin123']; // Replace with your usernames
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
