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
                <hr />
                <addNew />
            </div>
        );
    }
}

class addNew extends Component {
    render() {
        return (
            <div>
                <h3>Adding New Album</h3>
                <form>
                    <label>Album Name: </label>
                    <input></input>
                </form>
            </div>
        )
    }
}



export default logC;