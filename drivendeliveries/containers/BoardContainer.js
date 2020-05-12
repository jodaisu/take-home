import { useState } from "react";
import Board from "../components/Board";

const BoardContainer = () => {
  const [inputCount, setInputCount] = useState(8);
  const [submitCount, setSubmitCount] = useState(inputCount);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitCount(inputCount);
  };

  return (
    <div className="container">
      {submitCount ? <Board cellCount={submitCount} /> : null}
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
      </form>
    </div>
  );
};
export default BoardContainer;
