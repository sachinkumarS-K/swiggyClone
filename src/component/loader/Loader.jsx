import React from 'react'
import "./loader.css"
const Loader = () => {
  return (
    <div className="absolute w-full h-screen dark:bg-[#242124]  ">
      <div className="custom-loader relative top-[36%] left-[50%] "></div>
    </div>
  );
}

export default Loader
