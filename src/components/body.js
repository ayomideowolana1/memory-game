import React from "react";
import Frame from "./frame";
import uniqid from "uniqid";

const Body = ({ data, handleClick }) => {
  return (
    <div className="container-fluid">
      <div className="row p-2">
        {data.map((i) => {
          return (
            <Frame
              key={i.id}
              id={i.id}
              handleClick={handleClick}
              text={i.text}
              src={i.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
