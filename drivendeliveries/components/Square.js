const Square = ({ row, column, offSet }) => {
  return offSet % 2 === 0 ? (
    <div className="tile1">
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
