import React, {useState} from "react";

function EightBall(props) {
  const { answers } = props;

  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a question");
  const [colors, setColorCount] = useState({goldenrod: 0, red: 0, green: 0})

  function resetVals () {
    setColor("black")
    setMessage("Think of a question")
    setColorCount({goldenrod: 0, red: 0, green: 0})
  }

  function updateValues() {
    const choice = answers[Math.floor(Math.random() * answers.length)];
    setColor(choice.color);
    setColorCount({...colors, [choice.color]: (colors[choice.color]+1)})
    setMessage(choice.msg);
  }

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
    <p>Red: {colors.red}, Green: {colors.green}, Yellow: {colors.goldenrod}</p>
    <button onClick={resetVals}> RESET 8BALL! </button>
    </div>
  );
}

export default EightBall;