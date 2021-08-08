
const Player1 = prompt("Player 1 name", "");
const Player2 = prompt("Player 2 name", "");

const randomDrop1 = Math.floor(Math.random() * 6) + 1;

const randomDiceImage = "dice" + randomDrop1 + ".png";

const randomDiceSource = "images/" + randomDiceImage;

const drop1 = document.querySelectorAll("img")[0];

 drop1.setAttribute("src", randomDiceSource);


 const randomDrop2 = Math.floor(Math.random() * 6) + 1;

 const randomDiceSource2 = "images/dice" + randomDrop2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);



 if(randomDrop1 > randomDrop2) {
   document.querySelector("h1").innerHTML = " 🚩 " + Player1 + " wins!"
 }

 else if (randomDrop1 < randomDrop2) {
   document.querySelector("h1").innerHTML = " 🚩 " + Player2 + " wins!"
 }

 else {
   document.querySelector("h1").innerHTML = "It's a DRAW! 🤝 "
 }
