const wordEl = document.getElementById("word");
const typingAreaEl = document.getElementById("typing-area");
const timerEl = document.getElementById("timer");
const startBtnEl = document.getElementById("start-btn");
const stopBtnEl = document.getElementById("stop-btn");
const speedEl = document.getElementById("speed");

let startTime;
let intervalId;
let isStopped = true;
let word = "";
let typedChars = 0;

// Fetch a random word
async function getRandomWord() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  const data = await response.json();
  return data[0];
}

// Start the typing test
async function startTest() {
  isStopped = false;
  startBtnEl.setAttribute("disabled", "disabled");
  stopBtnEl.removeAttribute("disabled");
  typingAreaEl.value = "";
  typingAreaEl.focus();

  word = await getRandomWord(); // Get the first word
  wordEl.textContent = word; // Show the word in the UI

  typedChars = 0; // Reset the character count
  startTime = Date.now(); // Record the start time
  intervalId = setInterval(updateTimer, 100); // Start the timer
}

// Stop the typing test
function stopTest() {
  isStopped = true;
  clearInterval(intervalId); // Stop the timer

  startBtnEl.removeAttribute("disabled");
  stopBtnEl.setAttribute("disabled", "disabled");

  // Calculate WPM
  const elapsedTime = (Date.now() - startTime) / 1000; // Time in seconds
  const wpm = typedChars / 5 / (elapsedTime / 60); // Words per minute formula

  // Display WPM
  speedEl.textContent = `WPM: ${wpm.toFixed(2)}`;
}

// Shake input field
function shakeInputField() {
  typingAreaEl.classList.add("incorrect");
  setTimeout(() => {
    typingAreaEl.classList.remove("incorrect");
  }, 500);
}

// Handle typing and change the word
async function changeWord() {
  const typedText = typingAreaEl.value.trim();

  if (!isStopped && typedText === word) {
    // Word is correct
    typedChars += word.length + 1; // Add the word length plus a space
    typingAreaEl.value = ""; // Clear the input field
    word = await getRandomWord(); // Fetch a new word
    wordEl.textContent = word; // Display the new word
  } else if (!isStopped && typedText !== "") {
    // Word is incorrect or partially incorrect
    if (!word.startsWith(typedText)) {
      shakeInputField(); // Trigger shake for incorrect input
    }
  }
}

// Handle Enter key press
async function handleEnterKey() {
  const typedText = typingAreaEl.value.trim();

  if (typedText === word) {
    // If the word is correct, move to the next word
    await changeWord();
  } else {
    // If the word is incorrect, trigger the shake effect
    shakeInputField();
  }
}

// Update the timer
function updateTimer() {
  const elapsedTime = (Date.now() - startTime) / 1000; // Time in seconds
  timerEl.textContent = elapsedTime.toFixed(1) + "s";
}

// Event listeners
typingAreaEl.addEventListener("input", () => {
  changeWord(); // Check for incorrect words while typing
});

typingAreaEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleEnterKey(); // Handle the Enter key for incorrect sentences
  }
});

startBtnEl.addEventListener("click", startTest);
stopBtnEl.addEventListener("click", stopTest);

//content appears one by one:

const text = document.getElementById("typing-text").textContent;
document.getElementById("typing-text").textContent = "";

let i = 0;
function typeText() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeText, 50); // Adjust typing speed by changing the timeout
  }
}

typeText();
