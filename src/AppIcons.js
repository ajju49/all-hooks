// npm install react-icons

import React from 'react'
import { FcCloseUpMode , FcFactory, FcAndroidOs} from "react-icons/fc";  // in { } add selected icon's name
function AppIcons() {
    return (
        <div>
           <h1>hi ....I am Ajinkya  <FcCloseUpMode/> <FcFactory/> <FcAndroidOs/> </h1> 
           {/* here we use icon's component */}
        </div>
    )
}

export default AppIcons
