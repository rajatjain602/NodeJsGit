import React, { Component } from 'react'
import axios from 'axios';

export default class FatchApi extends Component {

    getapi(){
 axios.getapi('https://jsonplaceholder.typicode.com/users').then((res)=>{
     console.log(res);}
 )
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    getapi();
                }}>get data from from api</button>
            </div>
        )
    }
}
