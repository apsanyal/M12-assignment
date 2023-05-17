// STEP 1


// class Cat {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     // Method to make the cat meow
//     meow() {
//       console.log(`${this.name} says meow!`);
//     }
//   }
  
//   const Dog = class {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     // Method to make the dog bark
//     bark() {
//       console.log(`${this.name} says woof!`);
//     }
//   };
  

// STEP 2

// const myCat = new Cat("Whiskers", 3);
// const myDog = new Dog("Buddy", 5);

// STEP 3

// class Animal {
//     constructor() {
//       // Constructor method
//     }
  
//     creation() {
//       console.log("The Animal has been created");
//     }
//   }

// const myAnimal = new Animal();
// myAnimal.creation();


// STEP 4
// class Animal {
//     constructor(message) {
//       this.message = message;
//     }
  
//     creation() {
//       console.log(this.message);
//     }
//   }

// const myAnimal = new Animal();
// myAnimal.creation();

// STEP 5

// class Animal {
//     constructor(type, breed, color, height, length) {
//       this.type = type;
//       this.breed = breed;
//       this.color = color;
//       this.height = height;
//       this.length = length;
//     }
//   }
  
//   const myAnimal = new Animal("Dog", "Labrador Retriever", "Golden", "24 inches", "36 inches");

// STEP 6


// for (let property in myAnimal) {
//     console.log(property + ": " + myAnimal[property]);
//   }

// STEP 7

// class Animal {
//     constructor(type, breed, color, height, length) {
//       this.type = type;
//       this.breed = breed;
//       this.color = color;
//       this.height = height;
//       this.length = length;
//     }
  
//     speak() {
//       if (this.type === "Dog") {
//         return `The ${this.color} dog is barking!`;
//       } else if (this.type === "Cat") {
//         return `The ${this.color} cat is meowing!`;
//       } else {
//         return "Unknown animal type!";
//       }
//     }
//   }
  
//   const myDog = new Animal("Dog", "Labrador Retriever", "Golden", "24 inches", "36 inches");
//   console.log(myDog.speak()); 
  
//   const myCat = new Animal("Cat", "Siamese", "Brown", "12 inches", "18 inches");
//   console.log(myCat.speak()); 
  

// STEP 8

// class Animal {
//     #type;
//     #breed;
//     #color;
//     #height;
//     #length;
  
//     constructor(type, breed, color, height, length) {
//       this.#type = type;
//       this.#breed = breed;
//       this.#color = color;
//       this.#height = height;
//       this.#length = length;
//     }
  
//     #checkType() {
//       if (this.#type === "Dog") {
//         return "dog";
//       } else {
//         return "cat";
//       }
//     }
  
//     speak() {
//       const animalType = this.#checkType();
//       return `The ${animalType} has made a noise!`;
//     }
//   }
  
//   const myDog = new Animal("Dog", "Labrador Retriever", "Golden", "24 inches", "36 inches");
//   console.log(myDog.speak()); 
  
//   const myCat = new Animal("Cat", "Siamese", "Brown", "12 inches", "18 inches");
//   console.log(myCat.speak()); 
  

// STEP 9
// function findWords(string, word) {
//     const regex = new RegExp('\\b' + word + '\\b', 'gi');
//     const matches = string.match(regex);
  
//     if (matches) {
//       const count = matches.length;
//       alert(`The word "${word}" was found ${count} time(s) in the paragraph.`);
//     } else {
//       alert(`The word "${word}" was not found in the paragraph.`);
//     }
//   }
  
//   // Example usage:
//   const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
//   findWords(paragraph, "Lorem"); // Output: The word "Lorem" was found 2 time(s) in the paragraph.
//   findWords(paragraph, "sit"); // Output: The word "sit" was found 1 time(s) in the paragraph.
//   findWords(paragraph, "foo"); // Output: The word "foo" was not found in the paragraph.
  