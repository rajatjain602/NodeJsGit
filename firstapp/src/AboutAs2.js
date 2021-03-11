import React from 'react'

function AboutUs2(props) {
    function call(){
        alert("done");
    }

    function ClickToMove(){
        alert("move");
        props.history.push('./navigate');
    }

    return (
        <div>
           <h1> AboutUS2 {props.match.params.id} </h1>
           {/* <button onClick={()=>{
               alert("done");
           }}></button> */}
            <button onClick={()=>{call();}}></button>
            <button onClick={()=>{ClickToMove();}}>ClickToMove</button>
           
        </div>
    )
}

export default AboutUs2