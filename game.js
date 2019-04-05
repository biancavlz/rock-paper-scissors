const valueLeft  = 0;
const valueRight = 0;

function score(opponentName, valueLeft, valueRight){
  resetsScore();
  tableHeaderName(opponentName);
  addTableRows(valueLeft, valueRight);
}

function tableHeaderName(opponentName){
  const headerTableSelector            = document.querySelector("th.th-opponent")
  return headerTableSelector.innerHTML = opponentName;
}

function resetsScore(){
  let currentOpponentName = document.querySelector("th.th-opponent").innerText;
  let newOpponentName     = document.querySelector('.player-one').innerHTML;
  
  if (currentOpponentName !== newOpponentName){
    $(".body-table").empty();
  }
}

function addTableRows(valueLeft, valueRight){
  const newRow     = document.querySelector(".body-table").insertRow();
  const leftCell   = newRow.insertCell(0).innerHTML = valueLeft;
  const middleCell = newRow.insertCell(1).innerHTML = ":";
  const cellRight  = newRow.insertCell(2).innerHTML = valueRight;
}

function result(leftHand, rightHand){
  const headerSelector = document.querySelector("h1");
  const opponentName   = document.querySelector(".player-one").textContent;

  let insert = headerSelector.innerHTML;

  if (leftHand === 3 && rightHand === 1){
    score(opponentName, valueLeft, insert = "1");
    return headerSelector.innerHTML = "You win";

  }else if ((leftHand === 3 && rightHand === 2) 
    || (leftHand === 2 && rightHand === 1) 
    ||(leftHand === 1 && rightHand === 3)){
      score(opponentName, insert = "1", valueRight);
      return headerSelector.innerHTML = opponentName + " wins";

  }else if ((leftHand === 2 && rightHand === 3) || (leftHand < rightHand)){
    score(opponentName, valueLeft, insert = "1");
    return headerSelector.innerHTML = "You win";

  }else {
    score(opponentName, insert = "0", insert = "0");
    return headerSelector.innerHTML = "Draw!";
  }
}

// Gets the text of the button
const opponentsArray = document.querySelectorAll('.opponent');

opponentsArray.forEach(function(button, i) {
  button.addEventListener("click", function() {
    let name    = document.getElementsByTagName("button")[i].textContent
    let newName = document.querySelector('.player-one').innerHTML = name
  });
});

function getRandomNumber(){
  const number = Math.floor(Math.random() * 3) + 1;
  return number;
}

function getHandsImages(i) {
  const rightHandNum = i + 1;
  document.getElementsByTagName("img")[2].setAttribute("src", "./assets/right" + rightHandNum + ".png");

  const leftHandNum = getRandomNumber();
  document.getElementsByTagName("img")[1].setAttribute("src", "./assets/left" + leftHandNum + ".png"); 

  result(leftHandNum, rightHandNum)
}

//main function
const rightHandsArray = document.querySelectorAll('.button-right');

function getHands(array) {
  array.forEach(function(button, i) {
    button.addEventListener("click", function() {
      setTimeout(function(){ getHandsImages(i); }, 1300)
    });
  });
}

getHands(rightHandsArray)
