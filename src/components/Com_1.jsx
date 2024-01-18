import Com_2 from "./Com_2";

// eslint-disable-next-line react/prop-types
const Com_1=({username,setUsername})=>{
    return(
        <div>
            <h1>Com_1 <span>{username}</span></h1>
            <Com_2  username={username} setUsername={setUsername}/>
        </div>
    )
}
export default  Com_1;