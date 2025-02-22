import Row from "./Row";
function Grid({ currentGuess, guesses, moves }) {
  return (
    <div>
      {guesses.map((g, i) => {
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
}

export default Grid;
