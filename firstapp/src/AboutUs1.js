import React from 'react'

function AboutUs1(props) {
    var data=[{Name :"Rajat Jain",Company:"Allen"},{Name :"Rohit",Company:"TCS"},{Name :"Mohit",Company:"Infosys"}]
    var formate=data.map((a)=>{
        return (<li key={a.Name}>{a.Name}---{a.Company}</li>)
    
    })
    return (
        <div>
          <h1>AboutUS1 {props.match.params.id}</h1>  
          <h1>{data.Name}</h1>
            <ul>{formate}</ul>
        </div>
    )
}

export default AboutUs1
