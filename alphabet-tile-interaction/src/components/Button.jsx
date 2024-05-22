import React from "react";

const Button = ({ letter, onClick }) => {
  return (
    <div className="tile" onClick={() => onClick(letter)}>
      {letter}
    </div>
  );
};

export default Button;
