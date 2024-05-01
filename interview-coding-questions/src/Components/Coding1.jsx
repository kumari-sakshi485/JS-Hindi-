import { useEffect, useState } from "react";

function Coding1(){
    const [count , setCount] = useState(0);
    useEffect(() =>{
        console.log("Component rendered successfully");
    },[]);

    return(
        <>
        <div>
            <button onClick={()=>setCount(count+1)}> Add</button>
            <p>You clicked {count} times</p>

           
            
            <button onClick={()=>setCount(count-1)}> Minus</button>
            {/* <p>You clicked {count} times</p> */}
            </div>
            </>
    )
}
export default Coding1;