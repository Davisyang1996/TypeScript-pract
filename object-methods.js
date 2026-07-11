/*
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robot.energyLevel);
*/

/*
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors);
*/

/*
const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },
  get todaysSpecial(){
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}! `
    }
    else {
      return 'Meal or price was not set correctly!'
    }
  }
};

menu.meal = 'burger'
menu.price = 6
console.log(menu.todaysSpecial)
*/

const team = {
  _players: [
    { firstName: "Davis", lastName: "Yang", age: 30 },
    { firstName: "Nikita", lastName: "Shulin", age: 27 },
    { firstName: "Caleb", lastName: "Martin", age: 23 },
  ],
  _games: [
    { opponent: "Russia", teamPoints: 3, opponentPoints: 0 },
    { opponent: "China", teamPoints: 2, opponentPoints: 0 },
    { opponent: "Australia", teamPoints: 1, opponentPoints: 1 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);
console.log(team.players);
console.log(team.games);
