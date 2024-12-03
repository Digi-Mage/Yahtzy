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
let ThirtyFiveBonus = 0

let threeOfAKind = 0
let fourOfAKind = 0
let fullHouse = 0
let smallStraight = 0
let largeStraight = 0
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
  threeOfAKind = points;
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
  fourOfAKind = points;
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
      fullHouse = 25;
      }
    else if (twos >= 2) {
      fullHouse = 25;
    }
    else if (threes >= 2) {
      fullHouse = 25;
    }
    else if (fours >= 2) {
      fullHouse = 25;
    }
    else if (fives >= 2) {
      fullHouse = 25;
    }
    else if (sixes >= 2) {
      fullHouse = 25;
    }
}

//_____________________Test area
//calcFullHouse([4,1,3,3,1,4])
//console.log(fullHouse)

//calcFourOfAKind([4,4,4,4,3,5])
//calcThreeOfAKind([4,4,4,5,3,5])
//console.log(fourOfAKind)
//console.log(threeOfAKind)

const calcSmStraight = (arr) => {
  let temp = [...arr];
  temp.sort()
  const setOne = new Set();
  const setTwo = new Set();
  const setThree = new Set();
  //Adding Values to sets to test for duplicate numbers, invalidates straight possibility if shorter than 4
  setOne.add(temp[0])
  setOne.add(temp[1])
  setOne.add(temp[2])
  setOne.add(temp[3])

  setTwo.add(temp[1])
  setTwo.add(temp[2])
  setTwo.add(temp[3])
  setTwo.add(temp[4])

  setThree.add(temp[2])
  setThree.add(temp[3])
  setThree.add(temp[4])
  setThree.add(temp[5])

  if (setOne.size == 4 || setTwo.size == 4 || setThree.size == 4) {
    testOne = (temp[3] - temp[0])
    testTwo = (temp[4] - [temp[1]])
    testThree = (temp[5] - [temp[2]])
    if (testOne >= 3 || testTwo >= 3 || testThree >=3) {
      smallStraight = 30
    }
  }
}

//___________________________TEST AREA


//console.log(smallStraight)
//let testArr = [3,2,2,4,5,6]
//calcSmStraight(testArr)
//console.log(smallStraight)