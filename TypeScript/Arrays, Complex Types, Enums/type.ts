// Custom type aliases declared with type syntax
type Coord = [number, number, string, number, number, string];

let codecademyCoordinates: Coord = [40, 43.2, "N", 73, 59.8, "W"];
let bermudaTCoordinates: Coord = [25, 0, "N", 71, 0, "W"];

// Function types specify the argument types and return type of a function
// This syntax is just like arrow notation for functions, except instead of the return value we put the return type
// Never omit the parameter names or the parentheses around the parameters in a function type annotation or the code won't run
type StringsToNumberFunction = (arg0: string, arg1: string) => number;
// A variable of type StringsToNumberFunction can be assigned any compatible function
let myFunc: StringsToNumberFunction;
myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};

myFunc = function(whatever: string, blah: string) {
  return whatever.length - blah.length;
};

// Math Operations
function add(a:number, b:number){return a+b }
function subtract(a:number, b:number){return a-b }
function multiply(a:number, b:number){return a*b}
function divide(a:number, b:number){return a/b}
function wrongAdd(a:number, b:number){return (a+b)+''} // intentionally bad add function

// Custom function type below
type OperatorFunction = (a:number,b:number) => number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback:OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name,'!');
  let value25 = operationCallback(2,5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
  console.log('Now fill out this worksheet.');
}

// Call your functions below:
mathTutor(multiply)
//mathTutor(wrongAdd) won't work because wrongAdd returns a string, not a number

type Human = { name: string; job: string };
type Dog = { name: string; tailWagSpeed: number };

type Family<T> = {
  parents: [T, T];
  mate: T;
  children: T[];
};
//Do not change the code above this line.

//Provide type annotations for the variables below:
let theFamily: Family<number> = {
  parents: [3, 4],
  mate: 9,
  children: [5, 30, 121],
};

let someFamily: Family<boolean> = {
  parents: [true, true],
  mate: false,
  children: [false, false, true, true],
};

let aFamily: Family<Human> = {
  parents: [
    { name: "Mom", job: "software engineer" },
    { name: "Dad", job: "coding engineer" },
  ],
  mate: { name: "Matesky", job: "engineering coder" },
  children: [{ name: "Babesky", job: "none" }],
};

let anotherFamily: Family<Dog> = {
  parents: [
    { name: "Momo", tailWagSpeed: 3 },
    { name: "Dado", tailWagSpeed: 100 },
  ],
  mate: { name: "Cheems", tailWagSpeed: 7 },
  children: [
    { name: "Puppin", tailWagSpeed: 0.001 },
    { name: "Puppenaut", tailWagSpeed: 0.0001 },
    { name: "Puppenator", tailWagSpeed: 0.01 },
  ],
};
