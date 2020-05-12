import Square from "./Square";

const Row = ({ cellCount, row, evenOrOdd }) => {
  let squares = [];
  for (let i = 0; i < cellCount; i++) {
    if (evenOrOdd === "odd") {
      squares.push(
        <Square
          row={row}
          column={i}
          key={`square-${i}`}
          offSet={i + 1}
        ></Square>
      );
    } else {
      squares.push(
        <Square row={row} column={i} key={`square-${i}`} offSet={i}></Square>
      );
    }
  }
  return <div className="row">{squares}</div>;
};

export default Row;
