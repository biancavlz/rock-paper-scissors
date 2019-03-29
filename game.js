function getRandomNumber(){
  const number = Math.floor(Math.random() * 3) + 1;
  return number;
}

const handLeft = getRandomNumber();
const handRight = getRandomNumber();

document.getElementsByTagName("img")[0].setAttribute("src", "./assets/left" + handLeft + ".png"); 
document.getElementsByTagName("img")[1].setAttribute("src", "./assets/right" + handRight + ".png");


const headerSelector = document.querySelector("h1")
if (handLeft > handRight) {
  headerSelector.innerHTML = "Player1 wins";
} else if (handLeft < handRight) {
  headerSelector.innerHTML = "Player2 wins";
} else {
  headerSelector.innerHTML = "Draw!";
}
