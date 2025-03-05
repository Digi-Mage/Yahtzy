//Randomizer for roll
const diceRoll = () => {
  return (Math.floor(Math.random()*6)+1)
}

//Roll A New Set of Dice
const roll = () => {
  let rollArr = [0,0,0,0,0]
for (let i = 0; i < rollArr.length; i++){
  rollArr[i] = diceRoll()
}
return rollArr;
}

//Initializing Array Variables
let hold = [0,0,0,0,0]
let diceArray = []

//Merge Old and New Rolls into Final Roll - contains 'Old roll and 'new roll' console logs for testing
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
  diceArray = finalRoll;
}

//ScoreSheet

let ones = 0
let twos = 0
let threes = 0
let fours = 0
let fives = 0
let sixes = 0
let thirtyFiveBonus = 0

let threeOfAKind = 0
let fourOfAKind = 0
let fullHouse = 0
let smallStraight = 0
let largeStraight = 0
let yahtzy = 0
let chance = 0

const yahtzyOne = document.getElementById('yahtzy-one-div');
const yahtzyTwo = document.getElementById('yahtzy-two-div');
const yahtzyThree = document.getElementById('yahtzy-three-div');
const yahtzyFour = document.getElementById('yahtzy-four-div');
const yahtzyFive = document.getElementById('yahtzy-five-div');

const fiveOfAKind = document.getElementById('five-of-a-kind-td');

//35 Bonus only works if called with syntax same as others
const calcThirtyFiveBonus = () => {
  let test = (ones + twos + threes +fours + fives + sixes)
  if (test >= 63) {
    return 35;
  }
  else {
    return 0
  }
}

// Can be used to calculate 1,2,3,4,5,6 on Sheet, Entered as calcNumberedDice([dice array], number on sheet)
const calcNumberedDice = (arr, valueSearchingFor) => {
  if (yahtzy == 50) {
    return 100;
  }
  let points = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valueSearchingFor) {
      points += valueSearchingFor
    }
  }
  return points;
}

const NumberDiceConversionOne = () => {
  let points = calcNumberedDice(diceArray, 1)
  document.getElementById("ones-td").innerHTML = points
}
const NumberDiceConversionTwo = () => {
  let points = calcNumberedDice(diceArray, 2)
  document.getElementById("twos-td").innerHTML = points
}
const NumberDiceConversionThree = () => {
  let points = calcNumberedDice(diceArray, 3)
  document.getElementById("threes-td").innerHTML = points
}
const NumberDiceConversionFour = () => {
  let points = calcNumberedDice(diceArray, 4)
  document.getElementById("fours-td").innerHTML = points
}
const NumberDiceConversionFive = () => {
  let points = calcNumberedDice(diceArray, 5)
  document.getElementById("fives-td").innerHTML = points
}
const NumberDiceConversionSix = () => {
  let points = calcNumberedDice(diceArray, 6)
  document.getElementById("sixes-td").innerHTML = points
}

document.getElementById("ones-td").addEventListener("click", NumberDiceConversionOne);
document.getElementById("twos-td").addEventListener("click", NumberDiceConversionTwo);
document.getElementById("threes-td").addEventListener("click", NumberDiceConversionThree);
document.getElementById("fours-td").addEventListener("click", NumberDiceConversionFour);
document.getElementById("fives-td").addEventListener("click", NumberDiceConversionFive);
document.getElementById("sixes-td").addEventListener("click", NumberDiceConversionSix);

// More Specialized Scoresheet Calculators

const calcThreeOfAKind = (arr) => {
  if (yahtzy == 50) {
    return 100;
  }
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
const threeOfAKindConversion = () => {
  points = calcThreeOfAKind(diceArray)
  document.getElementById("three-of-a-kind-td").innerHTML = points
}
document.getElementById("three-of-a-kind-td").addEventListener("click", threeOfAKindConversion);


const calcFourOfAKind = (arr) => {
  if (yahtzy == 50) {
    return 100;
  }
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

const fourOfAKindConversion = () => {
  points = calcFourOfAKind(diceArray)
  document.getElementById("four-of-a-kind-td").innerHTML = points
}
document.getElementById("four-of-a-kind-td").addEventListener("click", fourOfAKindConversion);


const calcFullHouse = (arr) => {
  if (yahtzy == 50) {
    return 100;
  }
    let points = 0
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
      points = 25;
      }
    else if (twos >= 2) {
      points = 25;
    }
    else if (threes >= 2) {
      points = 25;
    }
    else if (fours >= 2) {
      points = 25;
    }
    else if (fives >= 2) {
      points = 25;
    }
    else if (sixes >= 2) {
      points = 25;
    }
  return points;
}
const fullHouseConversion = () => {
  points = calcFullHouse(diceArray)
  document.getElementById("full-house-td").innerHTML = points
}
document.getElementById("full-house-td").addEventListener("click", fullHouseConversion);


const calcSmStraight = (arr) => {
  if (yahtzy == 50) {
    return 100;
  }
  let points = 0
  let temp = [...arr];
  temp.sort()
  const setOne = new Set();

  //Adding Values to sets to test for duplicate numbers, invalidates straight possibility if shorter than 4
  
  for (i = 0; i < temp.length; i++) {
    setOne.add(temp[i]);
  }

  if (setOne.size >= 4) {
      temp = Array.from(setOne)
      tempStr = temp.toString()

    if (tempStr.includes('1,2,3,4') || tempStr.includes('2,3,4,5') || tempStr.includes('3,4,5,6')) {
      points = 30
    }
  }
  return points;
}
const smStraightConversion = () => {
  points = calcSmStraight(diceArray)
  document.getElementById("small-straight-td").innerHTML = points
}
document.getElementById("small-straight-td").addEventListener("click", smStraightConversion);


const calcLgStraight = (arr) => {
  if (yahtzy == 50) {
    return 100;
  }
  let points = 0
  let temp = [...arr];
  temp.sort()
  const setOne = new Set();

  //Adding Values to sets to test for duplicate numbers, invalidates straight possibility if shorter than 5
  
  for (i = 0; i < temp.length; i++) {
    setOne.add(temp[i]);
  }

  if (setOne.size >= 5) {
    temp = Array.from(setOne)
    tempStr = temp.toString()

  if (tempStr.includes('1,2,3,4,5') || tempStr.includes('2,3,4,5,6')) {
    points = 40
  }
  }
  return points;

}
const lgStraightConversion = () => {
  points = calcLgStraight(diceArray)
  document.getElementById("large-straight-td").innerHTML = points
}
document.getElementById("large-straight-td").addEventListener("click", lgStraightConversion);


const calcYahtzy = (arr) => {
  const newSet = new Set();

  for (const a of arr) {
    newSet.add(arr[a]);
  }
  console.log(newSet)
  if (newSet.size == 1) {
    return 50;
  }
  else {
    return 0;
  }
}
const yahtzyConversion = () => {
  points = calcYahtzy(diceArray)
  document.getElementById("five-of-a-kind-td").innerHTML = points
}
document.getElementById("five-of-a-kind-td").addEventListener("click", yahtzyConversion);


const calcChance = (arr) => {
  if (yahtzy == 50) {
    return 100;
  }
  const points = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return points
}
const chanceConversion = () => {
  points = calcChance(diceArray)
  document.getElementById("chance-td").innerHTML = points
}
document.getElementById("chance-td").addEventListener("click", chanceConversion);

//Yahtzy Bonus Even Handler Functions
const fiveOfAKindBonusOne = () => {
  document.getElementById("ones-td").innerHTML = 100
}
const fiveOfAKindBonusTwo = () => {
  document.getElementById("twos-td").innerHTML = 100
}
const fiveOfAKindBonusThree = () => {
  document.getElementById("threes-td").innerHTML = 100
}
const fiveOfAKindBonusFour = () => {
  document.getElementById("fours-td").innerHTML = 100
}
const fiveOfAKindBonusFive = () => {
  document.getElementById("fives-td").innerHTML = 100
}
const fiveOfAKindBonusSix = () => {
  document.getElementById("sixes-td").innerHTML = 100
}
const fiveOfAKindBonusThreeOfAKind = () => {
  document.getElementById("three-of-a-kind-td").innerHTML = 100
}
const fiveOfAKindBonusFourOfAKind = () => {
  document.getElementById("four-of-a-kind-td").innerHTML = 100
}
const fiveOfAKindBonusFullHouse = () => {
  document.getElementById("full-house-td").innerHTML = 100
}
const fiveOfAKindBonusSmStraight = () => {
  document.getElementById("small-straight-td").innerHTML = 100
}
const fiveOfAKindBonusLgStraight = () => {
  document.getElementById("large-straight-td").innerHTML = 100
}
const fiveOfAKindBonusChance = () => {
  document.getElementById("chance-td").innerHTML = 100
}

 
const calcFiveOfAKindBonus = () => {
  if (fiveOfAKind.innerHTML == 50) {
    console.log('Select an unfilled score to replace. Whatever score you select will equal 100pts');

    // Remove previous event listeners
    document.getElementById("ones-td").removeEventListener("click", NumberDiceConversionOne);
    document.getElementById("twos-td").removeEventListener("click", NumberDiceConversionTwo);
    document.getElementById("threes-td").removeEventListener("click", NumberDiceConversionThree);
    document.getElementById("fours-td").removeEventListener("click", NumberDiceConversionFour);
    document.getElementById("fives-td").removeEventListener("click", NumberDiceConversionFive);
    document.getElementById("sixes-td").removeEventListener("click", NumberDiceConversionSix);

    document.getElementById("three-of-a-kind-td").removeEventListener("click", threeOfAKindConversion);
    document.getElementById("four-of-a-kind-td").removeEventListener("click", fourOfAKindConversion);
    document.getElementById("full-house-td").removeEventListener("click", fullHouseConversion);
    document.getElementById("small-straight-td").removeEventListener("click", smStraightConversion);
    document.getElementById("large-straight-td").removeEventListener("click", lgStraightConversion);
    document.getElementById("chance-td").removeEventListener("click", chanceConversion);


    // Add event listeners for 100 point functions
    document.getElementById("ones-td").addEventListener("mousedown", fiveOfAKindBonusOne);
    document.getElementById("twos-td").addEventListener("mousedown", fiveOfAKindBonusTwo);
    document.getElementById("threes-td").addEventListener("mousedown", fiveOfAKindBonusThree);
    document.getElementById("fours-td").addEventListener("mousedown", fiveOfAKindBonusFour);
    document.getElementById("fives-td").addEventListener("mousedown", fiveOfAKindBonusFive);
    document.getElementById("sixes-td").addEventListener("mousedown", fiveOfAKindBonusSix);

    document.getElementById("three-of-a-kind-td").addEventListener("mousedown", fiveOfAKindBonusThreeOfAKind);
    document.getElementById("four-of-a-kind-td").addEventListener("mousedown", fiveOfAKindBonusFourOfAKind);
    document.getElementById("full-house-td").addEventListener("mousedown", fiveOfAKindBonusFullHouse);
    document.getElementById("small-straight-td").addEventListener("mousedown", fiveOfAKindBonusSmStraight);
    document.getElementById("large-straight-td").addEventListener("mousedown", fiveOfAKindBonusLgStraight);
    document.getElementById("chance-td").addEventListener("mousedown", fiveOfAKindBonusChance);

    // Event listener for ending the function
    document.addEventListener("mouseup", (event) => {
      // Checks if the clicked element is one of the score elements then removes Bonus function event handlers and re-adds the normal score functions
      if (event.target.id === "ones-td" || event.target.id === "twos-td" || event.target.id === "threes-td" || event.target.id === "fours-td" ||
          event.target.id === "fives-td" || event.target.id === "sixes-td" || event.target.id === "three-of-a-kind-td" || event.target.id === "four-of-a-kind-td" ||
          event.target.id === "full-house-td" || event.target.id === "small-straight-td" || event.target.id === "large-straight-td" || event.target.id === "chance-td") {

        document.getElementById("ones-td").removeEventListener("mousedown", fiveOfAKindBonusOne);
        document.getElementById("twos-td").removeEventListener("mousedown", fiveOfAKindBonusTwo);
        document.getElementById("threes-td").removeEventListener("mousedown", fiveOfAKindBonusThree);
        document.getElementById("fours-td").removeEventListener("mousedown", fiveOfAKindBonusFour);
        document.getElementById("fives-td").removeEventListener("mousedown", fiveOfAKindBonusFive);
        document.getElementById("sixes-td").removeEventListener("mousedown", fiveOfAKindBonusSix);

        document.getElementById("three-of-a-kind-td").removeEventListener("mousedown", fiveOfAKindBonusThreeOfAKind);
        document.getElementById("four-of-a-kind-td").removeEventListener("mousedown", fiveOfAKindBonusFourOfAKind);
        document.getElementById("full-house-td").removeEventListener("mousedown", fiveOfAKindBonusFullHouse);
        document.getElementById("small-straight-td").removeEventListener("mousedown", fiveOfAKindBonusSmStraight);
        document.getElementById("large-straight-td").removeEventListener("mousedown", fiveOfAKindBonusLgStraight);
        document.getElementById("chance-td").removeEventListener("mousedown", fiveOfAKindBonusChance);

        //Add normal score calculators back to select buttons
        document.getElementById("ones-td").addEventListener("click", NumberDiceConversionOne);
        document.getElementById("twos-td").addEventListener("click", NumberDiceConversionTwo);
        document.getElementById("threes-td").addEventListener("click", NumberDiceConversionThree);
        document.getElementById("fours-td").addEventListener("click", NumberDiceConversionFour);
        document.getElementById("fives-td").addEventListener("click", NumberDiceConversionFive);
        document.getElementById("sixes-td").addEventListener("click", NumberDiceConversionSix);

        document.getElementById("three-of-a-kind-td").addEventListener("click", threeOfAKindConversion);
        document.getElementById("four-of-a-kind-td").addEventListener("click", fourOfAKindConversion);
        document.getElementById("full-house-td").addEventListener("click", fullHouseConversion);
        document.getElementById("small-straight-td").addEventListener("click", smStraightConversion);
        document.getElementById("large-straight-td").addEventListener("click", lgStraightConversion);
        document.getElementById("chance-td").addEventListener("click", chanceConversion);
      };
    });
  }
  else {console.log('Five of a kind must equal 50pts to use this Bonus')}
};

document.getElementById("bonus-td").addEventListener("click", calcFiveOfAKindBonus);



 
//_____________________________________Dice Roll Animation Functionality: 

//This function not currently in use but Id like to have this function when I can figure out how to make it and imgSetter work together
const animation = () => {
    let y = Math.floor(Math.random()*6)
    switch (y) {
      case 0:
        return("./Yahtzy Web Assets/one.svg")
      case 1:
        return("./Yahtzy Web Assets/two.svg")
      case 2:
        return("./Yahtzy Web Assets/three.svg")
      case 3:
        return("./Yahtzy Web Assets/four.svg")
      case 4:
        return("./Yahtzy Web Assets/five.svg")
      case 5:
        return("./Yahtzy Web Assets/six.svg")
      default:
        throw("animation switch case error")
    };
  };

const setDiceImg = (elementID) => {
    let i = 0
    if (elementID == 'yahtzy-one') {
        i = 0;
    }
    else if (elementID == 'yahtzy-two') {
      i = 1;
    }
    else if (elementID == 'yahtzy-three') {
      i = 2;
    }
    else if (elementID == 'yahtzy-four') {
      i = 3;
    }
    else if (elementID == 'yahtzy-five') {
      i = 4;
    }
    else {
      throw('An error has occurred on setFinalImg if Else Statement')
    }

    switch(diceArray[i]) {
      case 1:
        //(elementID).src = "./Yahtzy Web Assets/one.svg";
        document.getElementById(elementID).src = "./Yahtzy Web Assets/one.svg"
        break;
      case 2:
        //(elementID).src = "./Yahtzy Web Assets/two.svg";
        document.getElementById(elementID).src = "./Yahtzy Web Assets/two.svg"
        break;
      case 3: 
        //(elementID).src = "./Yahtzy Web Assets/three.svg";
        document.getElementById(elementID).src = "./Yahtzy Web Assets/three.svg"
        break;
      case 4:
        //(elementID).src = "./Yahtzy Web Assets/four.svg";
        document.getElementById(elementID).src = "./Yahtzy Web Assets/four.svg"
        break;
      case 5:
        //(elementID).src = "./Yahtzy Web Assets/five.svg";
        document.getElementById(elementID).src = "./Yahtzy Web Assets/five.svg"
        break;
      case 6:
        //(elementID).src = "./Yahtzy Web Assets/six.svg";
        document.getElementById(elementID).src = "./Yahtzy Web Assets/six.svg"
        break;
      default: 
        throw('An error has occurred in setFinalImg function diceArray switch statement');
      }
};

const imgSetter = () => {
  mergeRoll(hold)

  setDiceImg("yahtzy-one");
  setDiceImg("yahtzy-two");
  setDiceImg("yahtzy-three");
  setDiceImg("yahtzy-four");
  setDiceImg("yahtzy-five");
}

//This function not currently in use but Id like to have this function when I can figure out how to make it and imgSetter work together
const animationRun = () => {
  let x = 8;
  const intervalId = setInterval(() => {
    if (x <= 0) {
      clearInterval(intervalId);
    } else {
      document.getElementById("yahtzy-one").src = animation();
      document.getElementById("yahtzy-two").src = animation();
      document.getElementById("yahtzy-three").src = animation();
      document.getElementById("yahtzy-four").src = animation();
      document.getElementById("yahtzy-five").src = animation();
      x -= 1;
    };
  }, 100)
};

document.getElementById("yahtzy-roll-button").addEventListener("click", imgSetter);


//Hold Dice Visual Functionality - Click the dice to hold or unhold and the color changes to show as much

const holdVisualOne = () => {
  if (diceArray.length) {
    if (hold[0] == 0) {
      hold[0] = 1
      yahtzyOne.style.border = '5px solid #5c1f58';
    }
    else if (hold[0] == 1) {
      hold[0] = 0
      yahtzyOne.style.border = '5px solid black';
    }
  }
  else {
    console.log('You must roll before holding')
  }
};
document.getElementById("yahtzy-one-div").addEventListener("click", holdVisualOne);

const holdVisualTwo = () => {
  if (diceArray.length) {
    if (hold[1] == 0) {
      hold[1] = 1
      yahtzyTwo.style.border = '5px solid #5c1f58';
    }
    else if (hold[1] == 1) {
      hold[1] = 0
      yahtzyTwo.style.border = '5px solid black';
    }
  }
  else {
    console.log('You must roll before holding')
  }
};
document.getElementById("yahtzy-two-div").addEventListener("click", holdVisualTwo);

const holdVisualThree = () => {
  if (diceArray.length) {
    if (hold[2] == 0) {
      hold[2] = 1
      yahtzyThree.style.border = '5px solid #5c1f58';
    }
    else if (hold[2] == 1) {
      hold[2] = 0
      yahtzyThree.style.border = '5px solid black';
    }
  }
else {
  console.log('You must roll before holding')
}
};
document.getElementById("yahtzy-three-div").addEventListener("click", holdVisualThree);

const holdVisualFour = () => {
  if (diceArray.length) {
    if (hold[3] == 0) {
      hold[3] = 1
      yahtzyFour.style.border = '5px solid #5c1f58';
    }
    else if (hold[3] == 1) {
      hold[3] = 0
      yahtzyFour.style.border = '5px solid black';
    }
  }
  else {
    console.log('You must roll before holding')
  }
};
document.getElementById("yahtzy-four-div").addEventListener("click", holdVisualFour);

const holdVisualFive = () => {
  if (diceArray.length) {
    if (hold[4] == 0) {
      hold[4] = 1
      yahtzyFive.style.border = '5px solid #5c1f58';
    }
    else if (hold[4] == 1) {
      hold[4] = 0
      yahtzyFive.style.border = '5px solid black';
    }
  }
  else {
    console.log('You must roll before holding')
  }
  
};
document.getElementById("yahtzy-five-div").addEventListener("click", holdVisualFive);












/*
//______________________________Scorecard Test area: 

let testArr = [3,3,3,3,3]

ones = calcNumberedDice(testArr, 1)
twos = calcNumberedDice(testArr, 2)
threes = calcNumberedDice(testArr, 3)
fours = calcNumberedDice(testArr, 4)
fives = calcNumberedDice(testArr, 5)
sixes = calcNumberedDice(testArr, 6)

thirtyFiveBonus = calcThirtyFiveBonus

threeOfAKind = calcThreeOfAKind(testArr)
fourOfAKind = calcFourOfAKind(testArr)
fullHouse = calcFullHouse(testArr)
smallStraight = calcSmStraight(testArr)
largeStraight = calcLgStraight(testArr)
yahtzy = calcYahtzy(testArr)
chance = calcChance(testArr)

console.log('Ones: ' + ones )
console.log('Twos: ' + twos)
console.log('Threes: ' + threes)
console.log('Fours: ' + fours)
console.log('Fives: ' + fives)
console.log('Sixes: ' + sixes)

console.log('35 pt Bonus: ' + thirtyFiveBonus)

console.log('3 of a Kind: ' + threeOfAKind)
console.log('4 of a Kind: ' + fourOfAKind)
console.log('Full House: ' + fullHouse)
console.log('Small Straight: ' + smallStraight)
console.log('Large Straight: ' + largeStraight)
console.log('Yahtzy: ' + yahtzy)
console.log('Chance: ' + chance)
*/