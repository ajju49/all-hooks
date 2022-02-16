// vdo 5

import React, { useState } from "react";
import "./AppPractice.css";
function AppUsestateObject() {
  const [myObject, setmyObject] = useState({
    // first set data
    myName: "ajinkya",
    myAge: 28,
    degree: "BE",
  });

  const changeObject = () => {
    setmyObject({ ...myObject, myName: "shubham" }); // used spread opear to take prev. data as it is n thn chnge which data we want to chng
  };

  return (
    <div>
      <h1 className="myStyle">
      
        Name: {myObject.myName} & age: {myObject.myAge} & degree:{myObject.degree}
      </h1>
      <button onClick={changeObject}>update</button>
    </div>
  );
}

export default AppUsestateObject;
