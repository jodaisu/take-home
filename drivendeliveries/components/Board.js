import Row from "./Row";
import { useState } from "react";

const Board = ({ cellCount, color, shape }) => {
  const [pieceSelected, setPieceSelected] = useState(false);

  // loop over cellcount to render Rows
  let rows = [];
  for (let i = 0; i < cellCount; i++) {
    rows.push(
      <Row
        key={`row${i}`}
        row={i}
        cellCount={cellCount}
        evenOrOdd={i % 2 === 0 ? "even" : "odd"}
        player1={i < 2}
        player2={i >= cellCount - 2}
        color={color}
        shape={shape}
        pieceSelected={pieceSelected}
        setPieceSelected={setPieceSelected}
      ></Row>
    );
  }
  return <div className="Board">{rows}</div>;
};
export default Board;
