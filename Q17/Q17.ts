const guestLis: string[] = ["Akram", "Aslam", "Akbar", "Azhar", "Bilal", "Zafar", "Sana"];

// Print a message saying you can only invite two people
console.log("Due to limited space, you can invite only two people for dinner.");

// Loop through the guest list and remove excess guests
for (let i = 0; i < guestLis.length; i++) {
  if (i >= 2) {
    const removedGuest = guestLis.pop(); // Remove the last person from the list
    console.log(`Sorry, ${removedGuest}! You can't be invited to dinner.`);
  }
}

// Print invitation messages to the remaining guests
for (let i = 0; i < guestLis.length; i++) {
  console.log(`Dear ${guestLis[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
}

// Remove the last two names from the list to make it empty
guestLis.pop();
guestLis.pop();

// Print to confirm that the list is empty
console.log("The guest list is now empty:", guestLis);