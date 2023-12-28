import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'
import userContext from "./utils/userContext"
import { Provider } from 'react-redux'
import { store } from './redux/store'
function App() {

 const [mode, setMode] = useState("light");
 function changeModeHandler() {
   mode == "light" ? setMode("dark") : setMode("light");
 }
  return (
    <Provider store={store}>
      <div className={`${mode} `}>
        <div className="dark:bg-gradient-to-tr from-zinc-900 to-gray-700 overflow-hidden min-h-screen dark:text-white ">
          <Header mode={mode} changeModeHandler={changeModeHandler} />

          <Outlet />
        </div>
        {/* <Footer/> */}
      </div>
    </Provider>
  );
}

export default App
