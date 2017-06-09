import React, {Component} from 'react';
import "../sass/UserInfo.scss";

class logC extends Component {
    state = { inputValue: '' }
    render() {
        return (
            <div className="userInfo">
                <h2>User Info</h2>
                <p>This component is for user info</p>
                <textarea rows={'5'} value={this.state.inputValue} onChange={(e)=>this.setState({inputValue: e.target.value})}/>
                <hr />
                <button className='btn btn-defaults' onClick={()=>{alert(this.state.inputValue)}}>Save</button>
                <p>{this.state.inputValue}</p>
            </div>
        );
    }
}


const userInfo = () => (
    <div>
        
        <logC></logC>
    </div>
);

function logComponent() {
    return (
        <div>
            <textarea onChange={(e)=>console.log(e.target.value)}/>
            <button onClick={()=>{console.log('save button')}}>Save</button>
        </div>
    )
}


export default logC;