// premitives: number, string, boolean

let age: number = 24;
let userName: string = "Ammar";

let isInstructor: boolean = false;

// More complex types
let hobbies: string[];
hobbies = ["Sports", "cooking"];

// object of specific data format
let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 33,
};

// Array of objects
let peopleArray: {
  name: string;
  age: number;
}[];

peopleArray = [
  { name: "Ammar", age: 33 },
  { name: "ali", age: 23 },
];

// type inference
let course = "React - The complete Guide";

// this below is invalid as it was already known by TS it was a string
// course = 23

// multible different types
let courses: string | number = "React - The complete Guide";
courses = 24;

// Define an Alias, a type
type Person = {
  name: string;
  age: number;
};

let person2: Person = { name: "Ammar", age: 32 };
let peopleArr2: Person[] = [
  { name: "Ammar", age: 33 },
  { name: "ali", age: 23 },
];

// Functions & types ... defining the return value
function add(a: number, b: number): number {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}

// Generics, it will look at values of the provided arguments
// so the results of the generated result has to be of the same type of the provided arguments
function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArr = [1, 2, 3, 4];
const updatedArray = insertAtBegining(demoArr, 5); // [5,1,2,3,4]

const demoArr2 = ["a", "b", "c", "d"];
const updatedArray2 = insertAtBegining(demoArr2, "e"); // ["c","a", "b", "c", "d"]
