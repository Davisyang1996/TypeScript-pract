"use strict";
const bonus1 = 45.4; // current bonus
const bonus2 = 51.9; // new bonus
// rounding function since valence bonus is roounded to 1 decimal place
function roundTo(num, places) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
}
// final bonus is the greater of the two bonuses multiplied by 1.1, but capped at 60
const finalBonus = roundTo(Math.min(1.1 * Math.max(bonus1, bonus2), 60), 1);
if (finalBonus === 60) {
    console.log(`Final bonus maxed out at 60`);
}
else {
    console.log(`Final bonus is ${finalBonus}`);
}
