function Row() {
  return (
    <div className="row">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
}

export default Row;
