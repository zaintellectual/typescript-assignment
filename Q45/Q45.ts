interface Car {
    manufacturer: string;
    model: string;
    color?: string;
    year?: number;
    features?: string[];
  }
  
  function createCar(manufacturer: string, model: string, options: Partial<Car> = {}): Car {
    const car: Car = {
      manufacturer,
      model,
      ...options, //spread operator for options
    };
    return car;
  }
  //Partial<Car> is a TypeScript utility type that makes all properties of the Car type optional.
  //This means you can provide some, all, or none of the properties when calling the function.
  
  // Call the function with required and optional information
  const myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["GPS", "Leather Seats"] });
  
  // Print the created car object
  console.log(myCar);
  