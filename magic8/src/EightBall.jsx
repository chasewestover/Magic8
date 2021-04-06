import React, {useState} from "react";

function EightBall(props) {
  const { answers } = props;

  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a question");

  function updateValues() {
    const choice = answers[Math.floor(Math.random() * answers.length)];
    setColor(choice.color);
    setMessage(choice.msg);
  }
  // updateValues();

  return (
    <div style={{ backgroundColor: color, borderRadius: '50%', width: '300px', height: "300px" }}
      onClick={updateValues}>
      <h3 style={{color: "white", textAlign: "center", padding: "60px"}}>{message}</h3>
    </div>
  );
}

export default EightBall;