// import React, { useState, useEffect } from "react";
// import "./AppPractice.css";

// function AppPractice() {
//   const [number, setnumber] = useState(0); // number =5 setnumber =5+1

//    useEffect(() => {
//     //    alert("hello i m refreshed")
//     document.title= `you clicked for  ${number}  times`
//    }, [number])

//   const increment = () => {
//     setnumber(number + 1);
//   };

//   return (
//     <>
//       <button onClick={increment}> {number} </button>

//     </>
//   );
// }

// export default AppPractice;

import React, { useState, useEffect } from "react";
import { FcAndroidOs, FcAutomotive } from "react-icons/fc";
import "./AppPractice.css";
function AppPractice() {
  const [number, setnumber] = useState(0);
  // ------------------------------------------------------------------------
  useEffect(() => {
    //  alert(" hello i m here")
    document.title = `you have clicked for ${number} times`;
  }, [number]);

  // ---------------------------------------------------------------------------
  const incNum = () => {
    setnumber(number + 1);
  };

  function DecNum() {
    setnumber(number - 1);
  }
  // --------------------------------------------------------------------------
  return (
    <div>
      <h1>{number}</h1>

      <h1>
        hi i am ajinkya <FcAndroidOs /> <FcAutomotive />
      </h1>
      <button onClick={incNum}>increment btn</button>
      <button onClick={DecNum}>decrement btn</button>
    </div>
  );
}

export default AppPractice;
