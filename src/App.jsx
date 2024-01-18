
import './App.css'

import Com_1 from "./components/Com_1";
import {useState} from "react";




function App() {
const [username,setUsername]=useState("")


    return(
       <div>
           <h1>App {username}</h1>
            <Com_1 username={username} setUsername={setUsername}/>
       </div>
  )
}

export default App
