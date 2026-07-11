//forEach() method executes a provided function once for each array element.
const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below
function printGrocery(fruit) {
  console.log(`I want to eat a ${fruit}.`);
}
fruits.forEach(printGrocery);


//Map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0]
}
);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number / 100
})

console.log(smallNumbers)

//filter() method creates a new array with all elements that pass the test implemented by the provided function.
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smolNumbers = randomNumbers.filter(number => {
  return number < 250
})
console.log(smolNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word =>{
  return word.length > 7
})
console.log(longFavoriteWords)

//findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

const moreAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = moreAnimals.findIndex(animal => {
  return animal === 'elephant'
});

const startsWithS = moreAnimals.findIndex(animal => {
  return animal.charAt(0) === 's'
});

//reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//reduce() takes two arguments: a callback function and an initial value. The callback function takes four arguments: accumulator, currentValue, currentIndex, and array. The initial value is optional; if not provided, the first element of the array will be used as the initial accumulator value.
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
},10);
console.log(newSum);

//Altogether now
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

//some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
console.log(words.some((word) => {
  return word.length < 6;
}));

const interestingWords = words.filter(word =>{
  return word.length > 5
})

//every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
console.log(interestingWords.every((word) => {return word.length > 5}));


//SUMMARY OF ARRAY METHODS

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);
nums.every(num => num < 0);