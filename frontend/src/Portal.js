import React from "react";
import { createPortal } from "react-dom";


function ModelContent({close}){
    return(
        <>
        <div>I am dialog model</div>
            <button onClick={close}>Close</button>
        </>
    )
}

function Portal(){
    const [showModel , setShowModel]=React.useState(false)

    function handleChange(){
        setShowModel(true)
    }
    return(
        <>
        <div style={{border:'1px solid blue'}}>


            <h2>Portal example</h2>
            <button onClick={handleChange}>
                Show model using Portal
            </button>

            {showModel && createPortal(<ModelContent close={() => setShowModel(false)}/> , document.body)}
            </div>
        </>
    )
}

export default Portal