const diceRoll = () => {
  return (Math.floor(Math.random()*6)+1)
}

let dice = [0,0,0,0,0,0]
let hold = [false,false,false,false,false,false]

//Roll
const roll = () => {
for (let i = 0; i < dice.length; i++){
  dice[i] = diceRoll()
}
return dice;
}

//merge rolls into One New Array
let mergeRoll = (holdArray) => {
let oldDie = dice
let newDie = roll()
let finalRoll = []

console.log('Old Roll: ' + oldDie)
console.log('New Roll: ' + newDie)

for (let m = 0; m < holdArray.length; m++) {
  if (holdArray[m] == true) {
    finalRoll.push(dice[m])
  }
  else {
    finalRoll.push(newDie[m])
  }
}
return finalRoll;
}

// roll() / mergeRoll(hold) / dice / hold [true, false]

dice = roll()
console.log('Dice: ' + dice)
hold = [false, true, true, false, false, true]
console.log(hold)
console.log(mergeRoll(hold))






