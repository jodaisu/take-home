import Piece from "./Piece";

const Square = ({
  row,
  column,
  offSet,
  player1,
  player2,
  color,
  shape,
  pieceSelected,
  setPieceSelected,
}) => {
  return offSet % 2 === 0 ? (
    <div className="tile1">
      <Piece
        key={`piece ${column}`}
        row={row}
        column={column}
        player1={player1}
        player2={player2}
        color={color}
        shape={shape}
        pieceSelected={pieceSelected}
        setPieceSelected={setPieceSelected}
      ></Piece>
      <style jsx>{`
        .tile1 {
          display: inline-block;
          width: 100px;
          height: 100px;
          border: 1px solid black;
          background-color: black;
          margin-bottom: -4px;
        }
      `}</style>
    </div>
  ) : (
    <div className="tile2">
      <Piece
        key={`piece ${column}`}
        row={row}
        column={column}
        player1={player1}
        player2={player2}
        color={color}
        shape={shape}
        pieceSelected={pieceSelected}
        setPieceSelected={setPieceSelected}
      ></Piece>
      <style jsx>{`
        .tile2 {
          display: inline-block;
          width: 100px;
          height: 100px;
          border: 1px solid black;
          background-color: white;
          margin-bottom: -4px;
        }
      `}</style>
    </div>
  );
};

export default Square;
