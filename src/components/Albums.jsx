import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class About extends Component {
    render() {
        const Content = () => (
            <div style={{backgroundColor: 'lightblue'}}>
                <Link to="/albums">Albums</Link>
                <hr />
                <p>This Part is nested router</p>
                <p>album name...</p>
                <div>
                    name from Path params: 
                    {/* this component hasn't imported {match} so using this.props.match */}
                    <span style={{backgroundColor: 'red', fontSize:'20px'}}>{this.props.match.params.name}</span>
                </div>
            </div>
        );

        const mainAlbum = ({match}) => (
            <div>
                <p>
                    Albums main component, should show all albums list
                </p>
                {/* using {match} to inherit this.props.match */}
                <Link to={`${match.url}/new`}>New Album Page</Link>
                <hr />
            </div>
        );

        return (
            <div className="Albums">
                <Link to="/">HOME</Link>
                <hr />
                <Switch>
                    <Route exact path={this.props.match.url} component={mainAlbum} />
                    <Route path={`${this.props.match.url}/:name`} component={Content} />
                </Switch>
            </div>
        );
    }
}

export default About;