let fruit: string = 'apple';
console.log("Is fruit == 'apple'? I predict True.", fruit == 'apple');
console.log("Is fruit != 'banana'? I predict True.", fruit != 'banana');
console.log("Is fruit == 'orange'? I predict False.", fruit == 'orange');
console.log("Is fruit != 'apple'? I predict False.", fruit != 'apple');

// Tests using the lower case function
let name2: string = 'John';
console.log("Is name.toLowerCase() == 'john'? I predict True.", name2.toLowerCase() == 'john');
console.log("Is name.toLowerCase() == 'jane'? I predict False.", name2.toLowerCase() == 'jane');

// Numerical tests
let num: number = 10;
console.log("Is num > 5? I predict True.", num > 5);
console.log("Is num < 0? I predict False.", num < 0);
console.log("Is num >= 10? I predict True.", num >= 10);
console.log("Is num <= 5? I predict False.", num <= 5);

// Tests using "and" and "or" operators
let age: number = 25;
console.log("Is age > 18 and age < 30? I predict True.", age > 18 && age < 30);
console.log("Is age > 30 or age < 18? I predict False.", age > 30 || age < 18);

// Test whether an item is in an array
let colors: string[] = ['red', 'green', 'blue'];
console.log("Is 'green' in colors? I predict True.", colors.includes('green'));
console.log("Is 'yellow' in colors? I predict False.", colors.includes('yellow'));

// Test whether an item is not in an array
let animals: string[] = ['dog', 'cat', 'horse'];
console.log("Is 'fish' not in animals? I predict True.", !animals.includes('fish'));
console.log("Is 'dog' not in animals? I predict False.", !animals.includes('dog'));