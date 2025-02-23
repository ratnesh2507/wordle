# Wordle React

A simple Wordle clone built using React.js. This project replicates the popular word-guessing game, where players have a limited number of attempts to guess a hidden word.

## 🚀 Features

- Interactive Wordle gameplay
- Keyboard input support
- Word validation and feedback (correct letters, misplaced letters, wrong letters)
- Responsive design for different screen sizes
- Smooth animations and transitions
- State management using React hooks

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- CSS (for styling and animations)
- json-server (npm package)

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ratnesh2507/wordle-react.git
   ```
2. Navigate to the project directory:
   ```sh
   cd wordle-react
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Install json-server globally:
   ```sh
   npm i -g json-server
   ```
5. Start the json-server:
   ```sh
   json-server ./data/words.json --port 8080
   ```
6. Start the development server in a new terminal:
   ```sh
   npm start
   ```
7. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 🕹️ How to Play

1. Enter a 5-letter word in the input field.
2. Press **Enter** to submit your guess.
3. Each letter will be highlighted:
   - 🟩 **Green**: Correct letter in the correct position.
   - 🟨 **Yellow**: Correct letter in the wrong position.
   - ⬜ **Gray**: Incorrect letter.
4. Keep guessing until you find the correct word or run out of attempts.

## 📌 TODO

- Add dark mode support
- Improve mobile UI/UX
- Implement word list customization

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the **MIT License**.

## 📬 Contact

- GitHub: [@ratnesh2507](https://github.com/ratnesh2507)
- LinkedIn: [Ratnesh BVK](https://www.linkedin.com/in/ratnesh-bvk/)
