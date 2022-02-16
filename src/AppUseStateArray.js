// vdo 4

import React, { useState } from "react";
import "./AppPractice.css";
const AppUseStateArray = () => {
  const biodata = [
    {
      id: 0,
      myName: "ajinkya",
      age: 28,
    },
    {
      id: 1,
      myName: "monika",
      age: 25,
    },
    {
      id: 2,
      myName: "pratik",
      age: 29,
    },
  ];

  const [myArray, setmyArray] = useState(biodata);

  const clearArray = () => {
    setmyArray([]);
  };
  return (
    <>
      {myArray.map((abc) => (
        <h1 className="myStyle" key={abc.id}>
          
          name:{abc.myName} & age: {abc.age}
        </h1>
      ))}
      <button onClick={clearArray}>clear</button>
    </>
  );
};

export default AppUseStateArray;
