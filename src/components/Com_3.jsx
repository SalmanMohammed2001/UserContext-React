import { useContext } from "react";
import { userAuth } from "../App";


const Com_3=()=>{

    const {setUsername}=useContext(userAuth)

    return(
        <div>
            <h1>Com_3</h1>
            <input type="text" placeholder={"enter the username"} 
            onChange={(e)=>setUsername(e.target.value)}/>
        </div>
    )
}
export default  Com_3;