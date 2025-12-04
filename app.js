import input from "analiza-sync";
import { addSolveTime, askRiddle, createPlayer, measureSolveTime, showStats } from "./utils/index.js";
import allRiddles from "./riddles/index.js";


function startRiddleGame() {
  console.log("Welcome to the Riddle Game!");
  const name = input("What is your name? ");
  const player = createPlayer(name);
  console.log(`Hello, ${name}!`);
  
  allRiddles.forEach(riddle =>addSolveTime(player, measureSolveTime(() => askRiddle(riddle)))) 
  showStats(player);

}

startRiddleGame();
