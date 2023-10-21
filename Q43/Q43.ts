function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push("the Great " + magicians[i]);
    }
  
    return greatMagicians;
  }
  
  function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  // Array of magician names
  const magiciaNames: string[] = ["Magician1", "Magician2", "Magician3", "Magician4"];
  
  // Call make_great with a copy of the original array and store the new array
  const greatMagiciaNames: string[] = make_great([...magiciaNames]); // making shallow copy using spread operator
  
  // Call show_magicians to display the original list
  show_magicians(magiciaNames);
  
  // Call show_magicians again to display the new list with "the Great" added
  show_magicians(greatMagiciaNames);
  