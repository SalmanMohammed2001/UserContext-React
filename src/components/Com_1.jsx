import { useContext } from "react";
import Com_2 from "./Com_2";
import { userAuth } from "../App";


const Com_1=()=>{
    const{username}=useContext(userAuth)
    return(
        <div>
            <h1>Com_1 <span>{username}</span></h1>
            <Com_2  />
        </div>
    )
}
export default  Com_1;