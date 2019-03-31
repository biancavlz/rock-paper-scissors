function getRandomNumber(){
  const number = Math.floor(Math.random() * 3) + 1;
  return number;
}

function result(leftHand, rightHand){
  const headerSelector = document.querySelector("h1")

  if (leftHand === 3 && rightHand === 1){
    return headerSelector.innerHTML = "Player2 wins";
  }else if (leftHand === 3 && rightHand === 2){
    return headerSelector.innerHTML = "Player1 wins";
  }else if (leftHand === 2 && rightHand === 1){
    return headerSelector.innerHTML = "Player1 wins";
  }else if (leftHand === 2 && rightHand === 3){
    return headerSelector.innerHTML = "Player2 wins";
  }else if (leftHand < rightHand) {
    return headerSelector.innerHTML = "Player2 wins";
  } else {
    return headerSelector.innerHTML = "Draw!";
  }
}

const rightHandsArray = document.querySelectorAll('button')

rightHandsArray.forEach(function(button, i) {
  button.addEventListener("click", function() {

    setTimeout(function() {
      const rightHandNum = i + 1
      document.getElementsByTagName("img")[1].setAttribute("src", "./assets/right" + rightHandNum + ".png");

      const leftHandNum = getRandomNumber();
      document.getElementsByTagName("img")[0].setAttribute("src", "./assets/left" + leftHandNum + ".png"); 

      result(leftHandNum, rightHandNum);
    }, 2000);
  });
});
