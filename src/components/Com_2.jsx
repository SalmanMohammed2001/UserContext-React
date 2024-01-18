import Com_3 from "./Com_3";

// eslint-disable-next-line react/prop-types
const Com_2=({username,setUsername})=>{
    return(
  <div>
      <h1>Com_2 <span>{username}</span></h1>

      <Com_3  username={username} setUsername={setUsername}/>
  </div>
    )
}
export default  Com_2;