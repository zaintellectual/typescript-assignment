const numbers: number[] = [1, 2, 3, 4, 5];

// Intentionally trying to access an index that doesn't exist
const index = 10;
console.log(numbers[index]);  // This will produce an index error

// To correct the error, make sure the index is within the valid range
if (index >= 0 && index < numbers.length) {
  console.log(numbers[index]);  // This will print the element at the specified index
} else {
  console.log("Index is out of range");
}