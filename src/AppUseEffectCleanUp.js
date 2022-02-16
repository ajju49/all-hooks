import React, { useState, useEffect } from "react";

function AppUseEffectCleanUp() {
  const [widthcount, setwidthcount] = useState(window.screen.width);
  const actualwidth = () => {
    // console.log('hiiiiii');
    console.log(window.innerWidth);
    setwidthcount(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualwidth); //resize in inbuilt event

    return () => {                                                          
      window.removeEventListener("resize", actualwidth);
      //when we addEventlistener at tht time events got stored in memory so,
      //to delete tht events we use removeEventListener which is [cleanup function]
    };
  });
  
  return (
    <div>
      <p>the size of ur window is :</p>
      <h1>{widthcount} px</h1>
    </div>
  );
}

export default AppUseEffectCleanUp;
