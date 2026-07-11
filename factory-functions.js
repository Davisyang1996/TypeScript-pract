/*
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
      }
  }
};

const tinCan = robotFactory('P-500',true)
tinCan.beep()
*/

 /*
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot

functionality.beep()
*/

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Declare list of robot properties:
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Declare newRobot:
// robot is NOT edited because the robot object is added as the second argument to Object.assign() and the first argument is a temporary object that is created with the properties laserBlaster and voiceRecognition
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true},robot);

console.log(newRobot);