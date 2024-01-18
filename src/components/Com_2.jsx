import { useContext } from "react";
import Com_3 from "./Com_3";
import { userAuth } from "../App";


const Com_2=()=>{

  const{username} =useContext(userAuth)
  
    return(
  <div>
      <h1>Com_2 <span>{username}</span></h1>

      <Com_3/>
  </div>
    )
}
export default  Com_2;