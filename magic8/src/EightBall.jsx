import React, {useState} from "react";

function EightBall(props) {
  const { answers } = props;

  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a question");
  const [colors, setColorCount] = useState({yellow: 0, red: 0, green: 0})

  function resetVals () {
    setColor("black")
    setMessage("Think of a question")
    setColorCount({yellow: 0, red: 0, green: 0})
  }

  function updateValues() {
    const choice = answers[Math.floor(Math.random() * answers.length)];
    setColor(choice.color);
    if (choice.color === "red") {
      setColorCount({...colors, red: colors.red+1});
    }
    if (choice.color === "green") {
      setColorCount({...colors, green: colors.green+1});
    }
    if (choice.color === "goldenrod") {
      setColorCount({...colors, yellow: colors.yellow+1});
    }
    setMessage(choice.msg);
  }
  // updateValues();

  return (
    <div>
    <div style={{ backgroundColor: color, borderRadius: '50%', width: '300px', height: "300px" }}
      onClick={updateValues}>
      <h3 style={{color: "white", textAlign: "center", padding: "60px"}}>{message}</h3>
    </div>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p>Red: {colors.red}, Green: {colors.green}, Yellow: {colors.yellow}</p>
    <button onClick={resetVals}> RESET 8BALL! </button>
    </div>
  );
}

export default EightBall;