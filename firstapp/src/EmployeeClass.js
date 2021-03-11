import React from 'react'
class EmployeeClass extends React.Component
{
    render(){
        return <div>
            <div>{this.props.Name}-{this.props.Age}-{this.props.Company}</div>

        </div>
    }
}

export default EmployeeClass