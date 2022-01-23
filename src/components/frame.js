import React, { useState, useEffect } from "react";

const Frame = ({ text, src, id, handleClick }) => {
  return (
    <div className="frame col-6 col-md-4 col-lg-2">
      <div
        id={id}
        onClick={() => {
          handleClick(id);
        }}
      >
        <img src={src} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Frame;
