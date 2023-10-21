"use strict";
const current_users = ['John', 'Alice', 'admin', 'Bob', 'Emma']; // Replace with your current usernames
const new_users = ['Alice', 'Eric', 'Sara', 'Admin', 'Olivia']; // Replace with your new usernames
for (let i = 0; i < new_users.length; i++) {
    const newUser = new_users[i];
    const lowerNewUser = newUser.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (current_users.includes(lowerNewUser)) {
        console.log(`Username "${newUser}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Username "${newUser}" is available.`);
    }
}
