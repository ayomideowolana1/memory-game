import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Body from "./components/body";
import Header from "./components/header";
import shuffle from "./components/shuffle";
import Scores from "./components/score";
import getData from "./components/data";

function App() {
  const [data, setData] = useState(getData());
  const [clickedItems, setClickedItems] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [ShowInfo, setShowInfo] = useState(true);

  const handleClick = (e) => {
    let arr = clickedItems;
    if (arr.includes(e)) {
      alert(`Game Over ${score > highScore ? `New high score ${score}`:""}`);
      if (score > highScore) {
        setHighScore(score);
      }
      reset();
    } else {
      let arr = shuffle(data);
      setData(arr);
      setClickedItems([...clickedItems, e]);
      setScore(score + 1);
    }
  };
  const reset = () => {
    setScore(0);
    setData(shuffle(getData));
    setClickedItems([]);
  };

  useEffect(() => {
    clickedItems.length == 0 ? setShowInfo(true) : setShowInfo(false);
  });
  return (
    <div className="App">
      <Header />
      <Scores score={score} highScore={highScore} />
      {ShowInfo? <p>Click on an image to start the game </p> : ""}
      <Body data={data} handleClick={handleClick} />
    </div>
  );
}

export default App;
