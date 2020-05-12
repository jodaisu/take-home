import { useState } from "react";

const Piece = ({
  player1,
  player2,
  row,
  column,
  color,
  shape,
  pieceSelected,
  setPieceSelected,
}) => {
  const [highlightPiece, setHighlightPiece] = useState(false);

  // handleClick logic
  const handleClick = () => {
    console.log("pieceSelected", pieceSelected);
    if (!pieceSelected) {
      setHighlightPiece(!highlightPiece);
      setPieceSelected(!pieceSelected);
    } else if (highlightPiece) {
      setHighlightPiece(!highlightPiece);
      setPieceSelected(!pieceSelected);
    }
  };

  // colors predefined
  if (color == 1) {
    color = {
      player1: "black",
      player2: "red",
    };
  } else
    color = {
      player1: "blue",
      player2: "yellow",
    };

  // if square, border radius changes dynamically
  if (shape === "square") {
    shape = 0;
  } else shape = 100;

  if (player1) {
    return (
      <div className="O" onClick={handleClick}>
        <style jsx>{`
          .O {
            margin: auto;
            margin-top: 9px;
            border: ${highlightPiece ? "3px solid yellow" : "1px solid white"};
            background-color: ${color.player1};
            border-radius: ${shape}%;
            height: 78px;
            width: 78px;
          }
        `}</style>
      </div>
    );
  }
  if (player2) {
    return (
      <div className="X" onClick={handleClick}>
        <style jsx>{`
          .X {
            margin: auto;
            margin-top: 9px;
            border: ${highlightPiece ? "3px solid yellow" : "1px solid black"};
            background-color: ${color.player2};
            border-radius: ${shape}%;
            height: 78px;
            width: 78px;
          }
        `}</style>
      </div>
    );
  } else return <div className="blank"></div>;
};

export default Piece;
