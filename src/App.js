import React from "react";

// This is component function
function App() {


    let curTime = new Date();
curTime = curTime.getHours();
let Time = new Date();
let date = Time.toLocaleDateString();
let time = Time.toLocaleTimeString();
let greeting = " ";
let name = "Abdullah";
const CssStyle = { };
const nameStyle =  { };
if (curTime > 13 && curTime < 17) {
  greeting = "Good Afternoon ";
  CssStyle.color = "orange";
} 
else if (curTime > 2 && curTime < 13) {
  greeting = "Good Morning";
  CssStyle.color = "green";
} else {
  greeting = "Good Night";
  CssStyle.color = "black";
  nameStyle.color = 'green';
}

  return (
    <>
      <div className="content">
        <h1>
          <span style={nameStyle}> Hello {name} ! </span>
          <span style={CssStyle}> {greeting} </span>
        </h1>
        <p style={{ color: "blue" }} className="date">
          Today: {date}{" "}
        </p>
        <p style={{ color: "blue" }} className="time">
          Time : {time}{" "}
        </p>
      </div>
    </>
  );
}

export default App;
