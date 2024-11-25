const diceRoll = () => {
  return (Math.floor(Math.random()*6)+1)
}

//Roll
const roll = () => {
  let rollArr = [0,0,0,0,0,0]
for (let i = 0; i < rollArr.length; i++){
  rollArr[i] = diceRoll()
}
return rollArr;
}

let hold = []
let diceArray = roll()

//merge rolls into One New Array
let mergeRoll = (holdArray) => {
  let oldDie = diceArray
  let newDie = roll()
  let finalRoll = []

  console.log('Old Roll: ' + oldDie)
  console.log('New Roll: ' + newDie)

  for (let m = 0; m < holdArray.length; m++) {
    if (holdArray[m] == true) {
      finalRoll.push(diceArray[m])
    }
    else {
      finalRoll.push(newDie[m])
    }
  }
  return finalRoll;
}

// roll() / mergeRoll(hold) / dice / hold [true, false]

console.log('Dice: ' + diceArray)
hold = [true, true, true, true, true, false]
console.log(hold)
console.log(mergeRoll(hold, diceArray))


