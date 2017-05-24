import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class About extends Component {
    render() {
        const Content = (props) => (
            <div style={{backgroundColor: 'lightblue'}}>
                <p>This Part is nested router</p>
                <p>album name...</p>
                <div>
                    name from Path params: 
                    <span style={{backgroundColor: 'red', fontSize:'20px'}}>{props.match.params.name}</span>
                </div>
            </div>
        );
        return (
            <div className="Albums">
                <Link to="/">HOME</Link>
                <hr />
                <p>
                    Albums main component
                </p>
                <hr />
                <Switch>
                    <Route path='/albums/:name' component={Content} />
                </Switch>
            </div>
        );
    }
}

export default About;