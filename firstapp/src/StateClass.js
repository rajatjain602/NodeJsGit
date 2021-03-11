import React from 'react'
class StateClass extends React.Component {
    // ctr;
    constructor() {
        super()
        //this.ctr =1 ;
        this.state={
            ctr:1
        }
    }

    incrementFun(){
        // this.state.ctr=this.state.ctr+1;
        this.setState({ctr:this.state.ctr+1})
       // this.ctr=this.ctr+1;
    }
    render() {
        return <div>
            <div>{this.state.ctr}</div>
            <button onClick={()=>{this.incrementFun();}}>Inc</button>
        </div>
    }
}

export default StateClass