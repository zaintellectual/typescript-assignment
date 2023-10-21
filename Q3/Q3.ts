let name1:string = 'Zain Abbas'; 
console.log(name1.toLowerCase());
console.log(name1.toUpperCase()); 
let titleCaseName: string = name1.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
console.log(titleCaseName);