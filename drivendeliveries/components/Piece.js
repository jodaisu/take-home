const Piece = ({ player1, player2, row, column, color, shape }) => {
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
      <div className="O">
        <style jsx>{`
          .O {
            margin: auto;
            margin-top: 9px;
            border: 1px solid white;
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
      <div className="X">
        <style jsx>{`
          .X {
            margin: auto;
            margin-top: 9px;
            border: 1px solid black;
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
