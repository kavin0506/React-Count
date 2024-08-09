import { useState } from "react";

const Count=()=>{

    const [number,setNumber]=useState(0)

const handleCount=()=>{
    if(number>=5){
        alert("your Count is Over")
        setNumber(0)
    }
    else{
        setNumber(number+1)
        
    }
}


    return(
        <div>
            <h2>Hello</h2>
            <p>{number}</p>
            <button onClick={()=>handleCount()}>ADD</button>
        </div>
    )
}

export default Count;