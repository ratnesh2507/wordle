function Modal({ isCorrect, moves, answer }) {
  return (
    <div className="modal">
      {/* correct answer */}
      {isCorrect && (
        <div>
          <h1>You Win!!!</h1>
          <p className="answer">{answer}</p>
          <p>You found the answer in {moves} guesses</p>
        </div>
      )}
      {/* incorrect answer */}
      {!isCorrect && (
        <div>
          <h1>Nevermind! :( , Try Again ?</h1>
          <p className="answer">{answer}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  );
}

export default Modal;
