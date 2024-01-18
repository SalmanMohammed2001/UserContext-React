
import './App.css'

import Com_1 from "./components/Com_1";
import {useState} from "react";
import {createContext} from "react";


// eslint-disable-next-line react-refresh/only-export-components
export  const  userAuth= createContext({})


function App() {
const [username,setUsername]=useState("")


    return(
       <userAuth.Provider value={{
        username,
        setUsername
       }}>
           <h1>App {username}</h1>
            <Com_1 />
       </userAuth.Provider>
  )
}

export default App
