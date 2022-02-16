import React, { useEffect, useState } from "react";
import "./AppPractice.css";
function Newpractice() {
  const [number, setnumber] = useState(0);

  useEffect(() => {
    //  alert("yo entered screen")
    document.title = `You have ${number} messages`
  }, [number])

  const increment = () => {
    setnumber(number + 1);
  };

  const decrement = () => {
    setnumber(number - 1);
  };
  
  return (
    <>
      <h1>{number}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}

export default Newpractice;
