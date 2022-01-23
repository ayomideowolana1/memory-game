import React, { useState, useEffect } from "react";

const Scores = ({ score, highScore }) => {
  return (
    <div>
      <b>Score:</b> {score} - <b>High score:</b> {highScore}
      <hr />
    </div>
  );
};

export default Scores;
