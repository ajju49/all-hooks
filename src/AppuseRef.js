// ################################# [ useRef and useForward by techsith] ##############################################################


import React, { useEffect, useRef } from "react";

function AppuseRef() {
  const firstNameRef = useRef(null);     //here we define useRef
  const lastNameRef = useRef(null);    //here we define useRef
  const submitRef = useRef(null);    //here we define useRef
  
 //----------------------------------------------------------------------------
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function firstkeyDown(e) {                // function for each key                        
    if (e.key === "Enter") {                // if pressed key = enter then it will proceed                 
      lastNameRef.current.focus();
    }
  }
  function lastkeyDown(e) {                 // function for each key               
    if (e.key === "Enter") {                // if pressed key = enter then it will proceed
      submitRef.current.focus();
    }
  }

  function submitkeyDown() {              // function for each key
          alert('form submitted')
  }
  //--------------------------------------------------------------------------------------
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text "
          onKeyDown={firstkeyDown}
          ref={firstNameRef}           // here we give reference 
          placeholder="Enter first name"
        />
        <input
          type="text "
          onKeyDown={lastkeyDown}
          ref={lastNameRef}            // here we give reference 
          placeholder="Enter last name"
        />
        <button onKeyDown={submitkeyDown} ref={submitRef}>       
          submit
        </button>
      </header>
    </div>
  );
}

export default AppuseRef;
