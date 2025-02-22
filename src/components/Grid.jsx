import Row from "./Row";
function Grid({ currentGuess, guesses, moves }) {
  return (
    <div>
      {guesses.map((g, i) => {
        if (moves == i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
}

export default Grid;
