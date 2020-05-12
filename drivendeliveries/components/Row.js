import Square from "./Square";

const Row = ({
  cellCount,
  row,
  evenOrOdd,
  player1,
  player2,
  color,
  shape,
  pieceSelected,
  setPieceSelected,
}) => {
  let squares = [];

  // loop over cellCount to render horizontal squares/tiles
  for (let i = 0; i < cellCount; i++) {
    if (evenOrOdd === "odd") {
      squares.push(
        <Square
          row={row}
          column={i}
          key={`square-${i}`}
          offSet={i + 1}
          player1={player1}
          player2={player2}
          color={color}
          shape={shape}
          pieceSelected={pieceSelected}
          setPieceSelected={setPieceSelected}
        ></Square>
      );
    } else {
      squares.push(
        <Square
          row={row}
          column={i}
          key={`square-${i}`}
          offSet={i}
          player1={player1}
          player2={player2}
          color={color}
          shape={shape}
          pieceSelected={pieceSelected}
          setPieceSelected={setPieceSelected}
        ></Square>
      );
    }
  }
  return <div className="row">{squares}</div>;
};

export default Row;
