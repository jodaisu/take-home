import Row from "./Row";

const Board = ({ cellCount }) => {
  // loop over cellcount to render Rows
  let rows = [];
  for (let i = 0; i < cellCount; i++) {
    rows.push(
      <Row
        key={`row${i}`}
        row={i}
        cellCount={cellCount}
        evenOrOdd={i % 2 === 0 ? "even" : "odd"}
      ></Row>
    );
  }
  return <div className="Board">{rows}</div>;
};
export default Board;
