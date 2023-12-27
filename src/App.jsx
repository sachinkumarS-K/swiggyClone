import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'
import userContext from "./utils/userContext"
function App() {

 const [mode, setMode] = useState("light");
 function changeModeHandler() {
   mode == "light" ? setMode("dark") : setMode("light");
 }
  return (
    <div className={`${mode} `}>
      <div className="dark:bg-gradient-to-tr from-zinc-900 to-gray-700  dark:text-white ">

          <Header mode={mode} changeModeHandler={changeModeHandler} />


        <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App
