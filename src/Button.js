//import { ReactDOM } from "react";
import React from "react";

function handleClick(e) {
  e.preventDefault();
  console.log('this is:', this);
}

const btn1 = () => {
  return(
    <button onClick={handleClick}>
      Try Me!
    </button>
  );
};

export default btn1;