import { useState } from "react";
import Board from "../components/Board";

const BoardContainer = () => {
  const [inputCount, setInputCount] = useState(8);
  const [submitCount, setSubmitCount] = useState(inputCount);
  const [shape, setShape] = useState("circle");
  const [color, setColor] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitCount(inputCount);
  };

  const changeShape = (e) => {
    setShape(e);
  };
  const changeColor = (e) => {
    setColor(e);
  };

  return (
    <div className="container">
      {submitCount ? (
        <Board cellCount={submitCount} color={color} shape={shape} />
      ) : null}
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          How many cells:
          <input
            type="text"
            value={inputCount}
            onChange={(e) => setInputCount(e.target.value)}
          />
        </label>
        <input type="submit" value="Go" />
        <br />
        <span>Shapes:</span>{" "}
        <input
          type="radio"
          name="shape"
          value="circle"
          defaultChecked
          onClick={(e) => changeShape(e.target.value)}
        ></input>{" "}
        <span>Circle</span>{" "}
        <input
          type="radio"
          name="shape"
          value="square"
          onClick={(e) => changeShape(e.target.value)}
        ></input>{" "}
        <span>Square</span>
        <br />
        <span>Colors:</span>{" "}
        <input
          type="radio"
          name="color"
          value="1"
          defaultChecked
          onChange={(e) => changeColor(e.target.value)}
        ></input>{" "}
        <span>1</span>{" "}
        <input
          type="radio"
          name="color"
          value="2"
          onChange={(e) => changeColor(e.target.value)}
        ></input>{" "}
        <span>2</span>
      </form>
    </div>
  );
};
export default BoardContainer;
