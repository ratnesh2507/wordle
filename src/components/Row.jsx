function Row({ guess }) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="row">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
}

export default Row;
