// import React, { useState, useEffect} from 'react'
// import './App.css'

// const App =() => {      

//   const [num, setnum] = useState(0)
//   const [numNew, setnumNew] = useState(0)

//   useEffect(()=>{         // useEffect ,is to give effect to page after every time  render method call.       
//      // alert("i am clicked")    //comment this to se effect of below line
//     document.title = `u clicked me ${num} times` // to chnge value in titlebar

//   },[num])         // here we add[], to display alert only after state of (num ) get change
//   return (         // if we put it black array [], it will show alert only aftr 1st refreshment of page
//     <div>
//       <button onClick={()=>{setnum(num+1)}}>click me {num}</button>
//       <button onClick={()=>{setnumNew(numNew+1)}}>click me {numNew}</button>
//     </div>
//   )
// }
// export default App;

import React, {useState} from 'react'

function App() {
  const [num, setnum] = useState(0)

  const incrementNum =()=>{
      setnum(num + 1 )
      
  }
  return (
    <div>
      <button onClick={incrementNum}>{num}</button>
    </div>
  )
}

export default App
