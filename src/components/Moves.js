import React from 'react';
// import './Moves.css'; // Import the CSS file

const Moves = () => {
  const columns = Array(7).fill(Array(12).fill(null)); // 7 columns, 12 boxes each

  return (
    <div className="container">
      {columns.map((column, colIndex) => (
        <div
          key={colIndex}
          className={`column ${colIndex % 2 === 0 ? 'move-up' : 'move-down'}`}
        >
          {column.map((_, boxIndex) => (
            <div key={boxIndex} className="box bgform"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Moves;









