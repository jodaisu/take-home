import Row from "./Row";
import { useState, useEffect } from "react";

const Board = ({ cellCount, color, shape }) => {
  const [matrix, setMatrix] = useState([]);
  const [pieceSelected, setPieceSelected] = useState(false);

  let matrixRaw = [];

  useEffect(() => {
    let matrix = [];
    const transpose = (arr, cellCount) => {
      let transposed = [];
      let j = 0;
      for (let i = 0; i < cellCount; i++) {
        let subArr = [];
        while (j <= arr.length - 1 && arr[j][0] === i) {
          subArr.push(arr[j].slice(1));
          j++;
        }
        transposed.push(subArr);
      }
      return transposed;
    };
    matrix = transpose(matrixRaw, cellCount);
    setMatrix(matrix);
    console.log(matrix);
  }, [cellCount]);

  const inputMatrix = (row, column) => {
    let player1;
    let player2;
    if (row === 0 || row === 1) {
      player1 = true;
      player2 = false;
      matrixRaw.push([row, column, player1, player2]);
    } else if (row === cellCount - 1 || row === cellCount - 2) {
      player1 = false;
      player2 = true;
      matrixRaw.push([row, column, player1, player2]);
    } else {
      player1 = false;
      player2 = false;
      matrixRaw.push([row, column, player1, player2]);
    }
  };

  const checkMoves = (row, column) => {
    console.log(row, column);
  };
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
        checkMoves={checkMoves}
        inputMatrix={inputMatrix}
      ></Row>
    );
  }
  return <div className="Board">{rows}</div>;
};
export default Board;
