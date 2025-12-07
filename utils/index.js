import input from "analiza-sync";

export function createPlayer(name) {
  return {
    name,
    times: [], // array of durations per riddle in seconds
  };
}

export function addSolveTime(player, seconds) {
  player.times.push(seconds);
}

export function showStats(player) {
  const totalTime = player.times.reduce((acc, time) => acc + time, 0);
  const averageTime = totalTime / player.times.length || 0;
  console.log(`Player: ${player.name}`);
  console.log(`Total Time: ${totalTime.toFixed(2)} seconds`);
  console.log(`Average Time: ${averageTime.toFixed(2)} seconds`);
}

export function askRiddle(riddle) {
  console.log(riddle.name);
  console.log(riddle.taskDescription);
  if (riddle.choices) {
    riddle.choices.forEach((choice, index) => {
      console.log(`${index + 1}. ${choice}`);
    });
  }

  console.log("what the result?");

  let answer;
  do {
    answer = input("Your answer: ");
    if (answer.toLocaleLowerCase() === riddle.correctAnswer.toLocaleLowerCase()) {
      console.log("Correct!");
    } else if (answer.toLocaleLowerCase() !== riddle.correctAnswer.toLocaleLowerCase() && answer !== "") {
      console.log("Wrong answer! try again.");
    }
  } while (answer.toLocaleLowerCase() !== riddle.correctAnswer.toLocaleLowerCase());
}

export function measureSolveTime(fn) {
  const startTime = Date.now();
  fn();
  const endTime = Date.now();
  const duration = (endTime - startTime) / 1000; 
  return duration;
}
