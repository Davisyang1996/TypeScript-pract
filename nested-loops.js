const bobsFollowers = ['Dave','Davo','Davis','Davonator'] 
const tinasFollowers = ['Dave','Davo','Chese']
const mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i])
        }
    }
}
console.log(mutualFollowers);

//run with node "nested-loops.js"