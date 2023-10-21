const numbrs: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbrs.length; i++) {
  const number = numbrs[i];
  let ordinalEnding = "th"; // Default ending is "th"

  if (number === 1) {
    ordinalEnding = "st";
  } else if (number === 2) {
    ordinalEnding = "nd";
  } else if (number === 3) {
    ordinalEnding = "rd";
  }

  console.log(`${number}${ordinalEnding}`);
}