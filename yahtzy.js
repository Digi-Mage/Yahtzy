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

// Can be used to calculate 1,2,3,4,5,6 on Sheet, Entered as calcNumberedDice([dice array], number on sheet)
const calcNumberedDice = (arr, valueSearchingFor) => {
  let points = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valueSearchingFor) {
      points += valueSearchingFor
    }
  }
  return points;
}

// More specialized Scoresheet calculators

const calcThreeOfAKind = (arr) => {
  let ones = 0
  let twos = 0
  let threes = 0
  let fours = 0
  let fives = 0
  let sixes = 0
  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 1:
        ones += 1;
        break;
      case 2:
        twos += 1;
        break;
      case 3:
        threes += 1;
        break;
      case 4:
        fours += 1;
        break;
      case 5:
        fives += 1;
        break;
      case 6:
        sixes += 1;
        break;
      default: 
        console.log('A Three of a Kind error has occurred')
    }
  }
  if (ones >= 3||twos >= 3||threes >= 3||fours >= 3||fives >= 3||sixes >= 3) {
    points = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  else {
    points = 0
  }
  return points;
}

const calcFourOfAKind = (arr) => {
  let ones = 0
  let twos = 0
  let threes = 0
  let fours = 0
  let fives = 0
  let sixes = 0
  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 1:
        ones += 1;
        break;
      case 2:
        twos += 1;
        break;
      case 3:
        threes += 1;
        break;
      case 4:
        fours += 1;
        break;
      case 5:
        fives += 1;
        break;
      case 6:
        sixes += 1;
        break;
      default: 
        console.log('A Four of a Kind error has occurred')
    }
  }
  if (ones >= 4||twos >= 4||threes >= 4||fours >= 4||fives >= 4||sixes >= 4) {
    points = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  else {
    points = 0
  }
  return points;
}

const calcFullHouse = (arr) => {
    let ones = 0
    let twos = 0
    let threes = 0
    let fours = 0
    let fives = 0
    let sixes = 0
    for (i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case 1:
          ones += 1;
          break;
        case 2:
          twos += 1;
          break;
        case 3:
          threes += 1;
          break;
        case 4:
          fours += 1;
          break;
        case 5:
          fives += 1;
          break;
        case 6:
          sixes += 1;
          break;
        default: 
          console.log('A Full House 3 of a kind error has occurred')
      }
    }
    //Filters out the three of a kind to prep for second check
    let temp = []
    if (ones >=3) {
      temp = arr.filter((value) => value != 1);
      }
    else if (twos >= 3) {
      temp = arr.filter((value) => value != 2);
    }
    else if (threes >= 3) {
      temp = arr.filter((value) => value != 3);
    }
    else if (fours >= 3) {
      temp = arr.filter((value) => value != 4);
    }
    else if (fives >= 3) {
      temp = arr.filter((value) => value != 5);
    }
    else if (sixes >= 3) {
      temp = arr.filter((value) => value != 6);
    }

    //checks remaining temp array for 2 of a kind to confirm full house
    ones = 0
    twos = 0
    threes = 0
    fours = 0
    fives = 0
    sixes = 0
    for (i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case 1:
          ones += 1;
          break;
        case 2:
          twos += 1;
          break;
        case 3:
          threes += 1;
          break;
        case 4:
          fours += 1;
          break;
        case 5:
          fives += 1;
          break;
        case 6:
          sixes += 1;
          break;
        default: 
          console.log('A Full House 2 of a kind error has occurred')
      }
    }
    if (ones >=2) {
      fullHouse = true;
      }
    else if (twos >= 2) {
      fullHouse = true;
    }
    else if (threes >= 2) {
      fullHouse = true;
    }
    else if (fours >= 2) {
      fullHouse = true;
    }
    else if (fives >= 2) {
      fullHouse = true;
    }
    else if (sixes >= 2) {
      fullHouse = true;
    }
}
calcFullHouse([6,4,4,5,3,5])
console.log(fullHouse)