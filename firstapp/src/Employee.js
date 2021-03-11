import React from 'react';

export default function Employee(props) {
    return (<div>
       <ul>
           <li>{props.Name} -{props.Age}-{props.company} </li>
       </ul>


    </div>)
}

