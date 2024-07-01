/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  randomcard();
};

function randomcard() {
  const suits = ["&diams;", "&spades;", "&clubs;", "&hearts;"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomValueIndex = Math.floor(Math.random() * values.length);

  const suit = suits[randomSuitIndex];
  const value = values[randomValueIndex];

  document.getElementById("top-suit").innerHTML = suit;
  document.getElementById("number").innerHTML = value;
  document.getElementById("bottom-suit").innerHTML = suit;

  if (suit === "&diams;" || suit === "&hearts;") {
    document.getElementById("top-suit").style.color = "red";
    document.getElementById("number").style.color = "red";
    document.getElementById("bottom-suit").style.color = "red";
  } else {
    document.getElementById("top-suit").style.color = "black";
    document.getElementById("number").style.color = "black";
    document.getElementById("bottom-suit").style.color = "black";
  }
}
document.getElementById("resetButton").addEventListener("click", function() {
  location.reload();
});
