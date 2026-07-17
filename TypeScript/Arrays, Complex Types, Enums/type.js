"use strict";
let codecademyCoordinates = [40, 43.2, "N", 73, 59.8, "W"];
let bermudaTCoordinates = [25, 0, "N", 71, 0, "W"];
// A variable of type StringsToNumberFunction can be assigned any compatible function
let myFunc;
myFunc = function (firstName, lastName) {
    return firstName.length + lastName.length;
};
myFunc = function (whatever, blah) {
    return whatever.length - blah.length;
};
// Math Operations
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
function wrongAdd(a, b) { return (a + b) + ''; } // intentionally bad add function
// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback) {
    console.log("Let's learn how to", operationCallback.name, '!');
    let value25 = operationCallback(2, 5);
    console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
    console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
    console.log('Now fill out this worksheet.');
}
// Call your functions below:
mathTutor(multiply);
//Do not change the code above this line.
//Provide type annotations for the variables below:
let theFamily = {
    parents: [3, 4],
    mate: 9,
    children: [5, 30, 121],
};
let someFamily = {
    parents: [true, true],
    mate: false,
    children: [false, false, true, true],
};
let aFamily = {
    parents: [
        { name: "Mom", job: "software engineer" },
        { name: "Dad", job: "coding engineer" },
    ],
    mate: { name: "Matesky", job: "engineering coder" },
    children: [{ name: "Babesky", job: "none" }],
};
let anotherFamily = {
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
