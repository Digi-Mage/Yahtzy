//Randomizer for roll
const diceRoll = () => {
  return (Math.floor(Math.random()*6)+1)
}

//Roll A New Set of Dice
const roll = () => {
  let rollArr = [0,0,0,0,0,0]
for (let i = 0; i < rollArr.length; i++){
  rollArr[i] = diceRoll()
}
return rollArr;
}

//Initializing Array Variables
let hold = []
let diceArray = roll()

//Merge Old and New Rolls into Final Roll
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

// Test Area
//NOTES: Function Syntax - roll() / mergeRoll(hold) / dice / hold [true, false]

//console.log('Dice: ' + diceArray)
//hold = [true, true, true, true, true, false]
//console.log(hold)
//console.log(mergeRoll(hold, diceArray))

//ScoreSheet

let ones = 0
let twos = 0
let threes = 0
let fours = 0
let fives = 0
let sixes = 0

let threeOfAKind = 0
let fourOfAKind = 0
let fullHouse = false
let smallStraight = false
let largeStraight = false
let yahtzy = 0
let chance = 0
let yahtzyBonus = 0

