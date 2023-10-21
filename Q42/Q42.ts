function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  }
  
  function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  // Array of magician names
  const magicianNams: string[] = ["Magician1", "Magician2", "Magician3", "Magician4"];
  
  // Call make_great to modify the magicians
  make_great(magicianNams);
  
  // Call show_magicians to see the modified list
  show_magicians(magicianNams);