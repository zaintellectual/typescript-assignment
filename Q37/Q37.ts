function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}"`);
  }
  
  // Creating shirts with default values
  make_shirt(); // Large shirt with the default message
  make_shirt("Medium"); // Medium shirt with the default message
  
  // Creating a custom shirt
  make_shirt("Small", "TypeScript Rocks!"); // Small shirt with a custom message