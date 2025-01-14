Key Sonic - Typing Speed Test.

Key Sonic is a fun and interactive typing speed test game where you can measure your typing speed in words per minute (WPM). The game dynamically generates random words that you need to type as quickly and accurately as possible, with the goal of improving your typing speed over time.

This project features a clean and minimal UI with a real-time timer, word display, and a word accuracy check. It also includes a fun shake effect for incorrect input to guide you while typing.

<img width="1440" alt="1" src="https://github.com/user-attachments/assets/1b2eb8f1-ef6d-4c89-9a81-21c1926becb4" />

Features
Random word generation from an API
Real-time timer tracking typing speed
Words per minute (WPM) calculation
Word accuracy check with visual feedback
Interactive input field with shake animation on errors
Simple and clean user interface
Demo
You can view a live demo of the app by opening the index.html file in your browser.

<img width="1440" alt="2" src="https://github.com/user-attachments/assets/3ecf7162-1ee1-476e-b995-98b27ad74cd6" />

<img width="1440" alt="4" src="https://github.com/user-attachments/assets/b2828158-8a24-4ca7-a7e4-77339662e415" />

Getting Started
To run this project locally, follow the instructions below:

Prerequisites
Make sure you have a modern browser (Chrome, Firefox, Edge, etc.) installed to view and test the application.

Clone the Repository
Clone this repository using Git:
git clone https://github.com/abhishek-profiles/key-sonic.git

Navigate to the project directory:
cd key-sonic


Open index.html in your browser to run the project.
Project Structure
bash
Copy code
key-sonic/
├── index.html        # The main HTML file
├── style.css         # The stylesheet for styling the app
├── script.js         # The main JavaScript file that controls the game logic
└── README.md         # Project README file (this file)



How it Works
Random Word Generation: The game fetches a random word from the https://random-word-api.herokuapp.com/word API. This word will appear on the screen, and you need to type it.

Typing Test: Once you click "Start," the game will begin, and the timer starts. You need to type the word as it appears. When you type it correctly, a new word will appear. If you make a mistake, the input field will shake to let you know.

WPM Calculation: The game calculates words per minute based on the time you take to type the word and the number of correct characters typed. It displays your WPM on the screen after you stop the test.

Key Functions
startTest: Starts the typing test by disabling the "Start" button, enabling the "Stop" button, and initiating the timer.
stopTest: Stops the timer and calculates the WPM after the user completes the test.
changeWord: Updates the word to be typed when the previous word is typed correctly.
shakeInputField: Provides visual feedback by shaking the input field if the typed word is incorrect.
handleEnterKey: Handles the Enter key press for typing a word and moving to the next one.

<img width="1440" alt="3" src="https://github.com/user-attachments/assets/b25780fb-f971-4232-8de9-36393ae3a795" />



Technologies Used
HTML5 for the structure and layout
CSS3 for styling, including animations
JavaScript for game logic, DOM manipulation, and event handling


Installation

This project doesn't require any installation, just open the index.html file in a modern browser to play!

Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions, bug fixes, or suggestions are welcome!

1.Fork the repository.
2.Create a new branch for your changes.
3.Commit your changes.
4.Push your branch and create a pull request.
