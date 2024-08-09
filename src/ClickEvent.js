import { useState } from "react";

const ClickEvent=()=>{

    const[signIn,setSignIn]=useState(false);

    function handleChange(){
        setSignIn(signIn?false:true);
    }

    return(

        <div className="btn">
            

            <button onClick={handleChange}>{signIn?"signOut":" signIn"}</button>
            <p> {signIn?"hello welcome":"please signIn"}</p>
            
        </div>
    )
}


export default ClickEvent;