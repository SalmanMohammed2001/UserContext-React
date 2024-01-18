
// eslint-disable-next-line react/prop-types
const Com_3=({setUsername})=>{
    return(
        <div>
            <h1>Com_3</h1>
            <input type="text" placeholder={"enter the username"} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
    )
}
export default  Com_3;