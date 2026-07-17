"use strict";
// Under the hood, TypeScript processes these kinds of enum types using numbers. Enum values are assigned a numerical value according to their listed order. The first value is assigned a number of 0, the second a number of 1, and onwards
// Enum values can be reassigned to a different number, but this doesn't change the order of the enum values. The order is still determined by the order in which they are declared.
// Unsafe type declarations
let petOnSale = "chinchilla";
let ordersArray = [
    ["rat", 2],
    ["chinchilla", 1],
    ["hamster", 2],
    ["chinchilla", 50],
];
// Enum-erate all possible values for Pets 
var Pet;
(function (Pet) {
    Pet[Pet["Hamster"] = 0] = "Hamster";
    Pet[Pet["Rat"] = 1] = "Rat";
    Pet[Pet["Chinchilla"] = 2] = "Chinchilla";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
// Type-safe declarations by accessing the enum values and using a tuple type for the array
const petOnSaleTS = Pet.Chinchilla;
const ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50],
];
console.log(ordersArrayTS);
// Attempt to order 3 jerboas - won't work because jerboa is not in the enum
// ordersArrayTS.push([Pet.Jerboa, 3]);
ordersArrayTS.push([Pet.Rat, 3]);
// String enums are enums based on strings instead of numbers. 
var DirectionString;
(function (DirectionString) {
    DirectionString["North"] = "NORTH";
    DirectionString["South"] = "SOUTH";
    DirectionString["East"] = "EAST";
    DirectionString["West"] = "WEST";
})(DirectionString || (DirectionString = {}));
let whichWayToAntarctica;
//whichWayToAntarctica = '\ (•◡•) / Arbitrary String \ (•◡•) /'; // Type error!
//whichWayToAntarctica = 'SOUTH'; // STILL a type error!
whichWayToAntarctica = DirectionString.South; // The only allowable way to do this.
// Object types
function sayHappyBirthdayWithObject(personObject) {
    let output = "";
    output += "Happy Birthday " + personObject.name + "! ";
    output += "You are now " + personObject.age + " years old! ";
    output +=
        "Your birthday wish was to receive " +
            personObject.giftWish +
            ". And guess what? You will ";
    if (!personObject.success) {
        output += "not ";
    }
    output += "receive it! \n";
    console.log(output);
}
let birthdayBabies = [
    { name: "Liam", age: 0, giftWish: "karate skills", success: false },
    { name: "Olivia", age: 0, giftWish: "a bright future", success: true },
    { name: "Ava", age: 0, giftWish: "$0.25", success: true },
];
birthdayBabies.forEach(sayHappyBirthdayWithObject);
