// src/App.js
import React, { useState } from "react";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [outputString, setOutputString] = useState("");
  
  let [oldSelectedValue, setOldSelectedValue] = useState("");
  let [count, setCount] = useState(0);

  const handleTileClick = (letter) => {
    let newString = outputString + letter;

    if (oldSelectedValue !== letter) {
      setOldSelectedValue(letter);

      setCount(1);
    } else {
      count++;
      setCount(count);

      if (count == 3) {
        let newStringArr = newString.split("");

        newStringArr.splice(-3, 3, "_");
        newString = newStringArr.join("");

        setCount(0);
      }
    }
    setOutputString(newString);
  };

  


  return (
    <div className="App">
      <div className="grid">
        {alphabet.map((letter) => (
          <Button key={letter} letter={letter} onClick={handleTileClick} />
        ))}
      </div>
      <div id="outputString">{outputString}</div>
    </div>
  );
};

export default App;
