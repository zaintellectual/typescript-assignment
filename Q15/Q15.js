"use strict";
const guestist = ["Akram", "Aslam", "Akbar"];
// Print the guest who can't make it
const guestWhoCantMakeIt = guestist[1]; // Assuming the second person can't make it
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new person
const newGuest = "Azhar";
guestist[1] = newGuest;
// Print a second set of invitation messages for the updated guest list
for (let i = 0; i < guestist.length; i++) {
    console.log(`Dear ${guestist[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
}
