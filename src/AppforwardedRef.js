// ################################# [ useRef and useForward by techsith] ##############################################################


import React, { useEffect, useRef } from "react";
import Input from './components/Input'

function AppforwardedRef() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function firstkeyDown(e) {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }
  function lastkeyDown(e) {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  }

  function submitkeyDown(e) {
    if (e.key === "Enter"){
      alert('form submitted')
    }
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <Input
          type="text "
          onKeyDown={firstkeyDown}
          ref={firstNameRef}
          placeholder="Enter first name"
        />
        <Input
          type="text "
          onKeyDown={lastkeyDown}
          ref={lastNameRef}
          placeholder="Enter last name"
        />
        <button onKeyDown={submitkeyDown} ref={submitRef}>
          submit
        </button>
      </header>
    </div>
  );
}

export default AppforwardedRef;
