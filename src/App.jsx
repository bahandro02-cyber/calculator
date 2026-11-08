import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const add = (value) => setDisplay(display + value);

  const clear = () => setDisplay("");

  const calculate = () => {
    try {
      if (!/^[0-9+\-*/.() ]+$/.test(display)) {
        throw new Error("Invalid");
      }
      setDisplay(String(Function('"use strict"; return (' + display + ')')()));
    } catch {
      setDisplay("Ошибка");
    }
  };

  return (
    <div className="calculator">
      <h1>CALCULATOR</h1>

      <input value={display} readOnly />

      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","C","+","="].map((item) => (
          <button
            key={item}
            onClick={() =>
              item === "C" ? clear() :
              item === "=" ? calculate() :
              add(item)
            }
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
