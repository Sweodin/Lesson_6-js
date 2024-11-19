// Variables for the DOM elements

const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreNum = document.getElementById("score");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const difficultySelect = document.getElementById("difficulty");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
  "Puzzle",
  "Planet",
  "Castle",
  "Marvel",
  "Courage",
  "Paradox",
  "Oblique",
  "Enigma",
  "Zephyr",
  "Vortex",
];

/*----- Initial score -----*/

let score = 0;

/*----- Initial Time -----*/

let time = 10;
timeEl.innerHTML = time + 's';

/*----- Makes a random word -----*/

const addWordToDOM = (length) => {
  const randomIndex = Math.floor(Math.random() * length);
  const randomWord = words[randomIndex];
  word.innerHTML = randomWord;
};

/*----- Update Score -----*/

function updateScore() {
  score++;
  scoreNum.innerHTML = score;
}

/*----- Update time -----*/

function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

/*----- Game Over -----*/

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;
  endgameEl.style.display = 'flex';
}

/*----- declare a variable length  -----*/

const length = words.length;

/*----- start counting down -----*/

const timeInterval = setInterval(updateTime, 1000);

/*----- Event listener for text input -----*/

text.addEventListener('input', e => {
  const insertedText = e.target.value;
  if (insertedText === word.innerHTML) {
    updateScore();
    addWordToDOM(length);
    // Clear input
    e.target.value = '';
    // Add time
    time += 5;
    timeEl.innerHTML = time + 's';
  }
});

/*-----  Settings btn click -----*/

settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('hide');
});

/*----- Settings select -----*/

difficultySelect.addEventListener('change', e => {
  const difficulty = e.target.value;
  
  /*----- Set time depending on difficulty -----*/
  if (difficulty === 'easy') {
    time = 15;
  } else if (difficulty === 'medium') {
    time = 10;
  } else {
    time = 5;
  }
  timeEl.innerHTML = time + 's';
});

// Start game
addWordToDOM(length);
