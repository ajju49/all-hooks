//vdo 6

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
    {
      id: 3,
      myName: "shubham",
      age: 26,
    },
  ];

  const [myArray, setmyArray] = useState(biodata);

  const clearArray = () => {
    setmyArray([]);
  };

  const removeElem = (id) => {
    //   alert(id)
    const myNewArray = myArray.filter((curElem) => {
      return curElem.id !== id; // id which is not equal to currentElement tht will return
    });

    setmyArray(myNewArray); // setmyArray again to updated list
  };
  return (
    <>
      {myArray.map((curElem) => {
        return (
          <h1 className="myStyle" key={curElem.id}>
            name:{curElem.myName} & age: {curElem.age}
            <button className="btnInner" onClick={() => removeElem(curElem.id)}>
              Remove
            </button>
          </h1>                                               
        );
      })}
      <button onClick={clearArray}>clear</button>
    </>
  );
};

export default AppUseStateArray;
