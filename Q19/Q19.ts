const guestLit = ["Akram", "Aslam", "Akbar", "Azhar", "Bilal", "Zafar", "Sana"];

// Print the number of guests
console.log(`Number of guests invited: ${guestLit.length}`);

// Print the guests' names
for (let i = 0; i < guestLit.length; i++) {
  console.log(`Guest ${i + 1}: ${guestLit[i]}`);
}