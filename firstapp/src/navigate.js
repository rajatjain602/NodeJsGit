import React from 'react'

function Navigate() {

    var data=[{Name :"Rajat Jain",Company:"Allen"},{Name :"Rohit",Company:"TCS"},{Name :"Mohit",Company:"Infosys"}]
var formate=data.map((a)=>{
    return <li>a.Name---a.Company</li>

})

    return (
        <div>
            <h1>Navigate Page</h1>
            <h1>data.Name</h1>
            <ul>{formate}</ul>
        </div>
    )
}

export default Navigate
