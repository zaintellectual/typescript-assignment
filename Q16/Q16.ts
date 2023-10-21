const guesist: string[] = ["Akram", "Aslam", "Akbar"];

// Print the guest who can't make it
const guestWhCantMakeIt: string = guesist[1]; // Assuming the second person can't make it
console.log(`${guestWhCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
const newGust: string = "Azhar";
guesist[1] = newGust;

// Print a second set of invitation messages for the updated guest list
for (let i = 0; i < guesist.length; i++) {
  console.log(`Dear ${guesist[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
}

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add new guests using pop() and push()
guesist.push("Zafar"); // Add at the end using push()
guesist.splice(guesist.length / 2, 0, "Bilal"); // Add in the middle using splice()
guesist.push("Sana"); // Add at the end using push()

// Print new invitation messages for the updated guest list
for (let i = 0; i < guesist.length; i++) {
  console.log(`Dear ${guesist[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
}