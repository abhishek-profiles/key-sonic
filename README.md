# Key Sonic - Typing Speed Test

Key Sonic is a fun and interactive typing speed test game where you can measure your typing speed in words per minute (WPM). The game dynamically generates random words that you need to type as quickly and accurately as possible, with the goal of improving your typing speed over time.

This project features a clean and minimal UI with a real-time timer, word display, and a word accuracy check. It also includes a fun shake effect for incorrect input to guide you while typing.

## Features

- Random word generation from an API
- Real-time timer tracking typing speed
- Words per minute (WPM) calculation
- Word accuracy check with visual feedback
- Interactive input field with shake animation on errors
- Simple and clean user interface

## Demo

<img width="1440" alt="1" src="https://github.com/user-attachments/assets/30e34269-3f18-4685-adda-4925b7258cf8" />
<img width="1439" alt="11 5" src="https://github.com/user-attachments/assets/56bceab1-45a0-4541-abdf-3070042d094e" /> 
<img width="1440" alt="4" src="https://github.com/user-attachments/assets/057d61df-0e65-40a5-b58e-d6f1f0f3e628" /> 
<img width="1440" alt="3" src="https://github.com/user-attachments/assets/055d832c-6ea3-4596-acd2-b70f956c84a5" />


## Getting Started

To run this project locally, follow the instructions below:

### Prerequisites

Make sure you have a modern browser (Chrome, Firefox, Edge, etc.) installed to view and test the application.

### Clone the Repository

Clone this repository using Git:

```bash
git clone https://github.com/abhishek-profiles/key-sonic.git
```

Navigate to the project directory:

```bash
cd key-sonic
```

Open `index.html` in your browser to run the project.

## How it Works

- **Random Word Generation**: The game fetches a random word from the [https://random-word-api.herokuapp.com/word](https://random-word-api.herokuapp.com/word) API. This word will appear on the screen, and you need to type it.
  
- **Typing Test**: Once you click "Start," the game will begin, and the timer starts. You need to type the word as it appears. When you type it correctly, a new word will appear. If you make a mistake, the input field will shake to let you know.

- **WPM Calculation**: The game calculates words per minute based on the time you take to type the word and the number of correct characters typed. It displays your WPM on the screen after you stop the test.

## Key Functions

- **startTest**: Starts the typing test by disabling the "Start" button, enabling the "Stop" button, and initiating the timer.
- **stopTest**: Stops the timer and calculates the WPM after the user completes the test.
- **changeWord**: Updates the word to be typed when the previous word is typed correctly.
- **shakeInputField**: Provides visual feedback by shaking the input field if the typed word is incorrect.
- **handleEnterKey**: Handles the Enter key press for typing a word and moving to the next one.

## Technologies Used

- **HTML5** for the structure and layout
- **CSS3** for styling, including animations
- **JavaScript** for game logic, DOM manipulation, and event handling

## Installation

This project doesn't require any installation, just open the `index.html` file in a modern browser to play!

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions, bug fixes, or suggestions are welcome!

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes.
4. Push your branch and create a pull request.
