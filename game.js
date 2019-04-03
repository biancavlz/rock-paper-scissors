function getRandomNumber(){
  const number = Math.floor(Math.random() * 3) + 1;
  return number;
}

function score(opponentName, value){
  setsOpponentName(opponentName)
  setsValues(value)
}

function setsOpponentName(opponentName){
  const headerTableSelector = document.querySelector("th.th-opponent")
  return headerTableSelector.innerHTML = opponentName;
}

function setsValues(valueLeft = 0, valueRight = 0){
  const newRow     = document.querySelector(".body-table").insertRow();
  const leftCell   = newRow.insertCell(0);
  const middleCell = newRow.insertCell(1);
  const cellRight  = newRow.insertCell(2);

  leftCell.innerHTML   = valueLeft;
  middleCell.innerHTML = ":"
  cellRight.innerHTML  = valueRight;
}



function result(leftHand, rightHand){
  const headerSelector = document.querySelector("h1")
  const name = document.querySelector(".player-one").textContent

  const valueLeft = 0
  const valueRight = 0

  let insert = headerSelector.innerHTML

  if (leftHand === 3 && rightHand === 1){
    score(name, valueLeft, insert = "1");
    return insert = "You win";

  }else if (leftHand === 3 && rightHand === 2){
    score(name, insert = "1", valueRight);
    return insert = name + " wins";

  }else if (leftHand === 2 && rightHand === 1){
    score(name, insert = "1", valueRight);
    return insert = name + " wins";

  }else if (leftHand === 1 && rightHand === 3){
    score(name, insert = "1", valueRight);
    return insert = name + " wins";

  }else if (leftHand === 2 && rightHand === 3){
    score(name, valueLeft, insert = "1");
    return insert = "You win";

  }else if (leftHand < rightHand) {
    score(name, valueLeft,  insert = "1");
    return insert = "You win";
  } else {
    return insert = "Draw!";
    score(name);
  }
}

const opponentsArray = document.querySelectorAll('.opponent')

opponentsArray.forEach(function(button, i) {
  button.addEventListener("click", function() {
    let name    = document.getElementsByTagName("button")[i].textContent
    let newName = document.querySelector('.player-one').innerHTML = name
  });
});


const rightHandsArray = document.querySelectorAll('.button-right')

rightHandsArray.forEach(function(button, i) {
  button.addEventListener("click", function() {

    setTimeout(function() {
      const rightHandNum = i + 1
      document.getElementsByTagName("img")[2].setAttribute("src", "./assets/right" + rightHandNum + ".png");

      const leftHandNum = getRandomNumber();
      document.getElementsByTagName("img")[1].setAttribute("src", "./assets/left" + leftHandNum + ".png"); 

      result(leftHandNum, rightHandNum);
    }, 1500);
  });
});
