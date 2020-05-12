const Piece = ({ player1, player2, row, column }) => {
  if (player1) {
    return (
      <div className="O">
        <style jsx>{`
          .O {
            margin: auto;
            margin-top: 9px;
            border: 1px solid white;
            background-color: black;
            border-radius: 100%;
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
            background-color: red;
            border-radius: 100%;
            height: 78px;
            width: 78px;
          }
        `}</style>
      </div>
    );
  } else return <div className="blank"></div>;
};

export default Piece;
