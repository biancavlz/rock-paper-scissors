function getRandomNumber(){
  const number = Math.floor(Math.random() * 3) + 1;
  return number;
}

function result(leftHand, rightHand){
  const headerSelector = document.querySelector("h1")
  const name = document.querySelector(".player-one").textContent

  if (leftHand === 3 && rightHand === 1){
    return headerSelector.innerHTML = "You win";
  }else if (leftHand === 3 && rightHand === 2){
    return headerSelector.innerHTML = name + " wins";
  }else if (leftHand === 2 && rightHand === 1){
    return headerSelector.innerHTML = name + " wins";
  }else if (leftHand === 2 && rightHand === 3){
    return headerSelector.innerHTML = "You win";
  }else if (leftHand < rightHand) {
    return headerSelector.innerHTML = "You win";
  } else {
    return headerSelector.innerHTML = "Draw!";
  }
}

const opponentsArray = document.querySelectorAll('.opponent')

opponentsArray.forEach(function(button, i) {
  button.addEventListener("click", function() {
    let name = document.getElementsByTagName("button")[i].textContent
    let newName = document.querySelector('.player-one').innerHTML = name
  });
});


const rightHandsArray = document.querySelectorAll('.button-right')

rightHandsArray.forEach(function(button, i) {
  button.addEventListener("click", function() {

    setTimeout(function() {
      const rightHandNum = i + 1
      document.getElementsByTagName("img")[1].setAttribute("src", "./assets/right" + rightHandNum + ".png");

      const leftHandNum = getRandomNumber();
      document.getElementsByTagName("img")[0].setAttribute("src", "./assets/left" + leftHandNum + ".png"); 

      result(leftHandNum, rightHandNum, );
    }, 2000);
  });
});
