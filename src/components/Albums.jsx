import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class About extends Component {
    render() {
        const Content = (({match}) => {
            (<div>
                <p>album name...</p>
                <p>{match.params.name}</p>
            </div>)
        });
        return (
            <div className="Albums">
                <Link to="/">HOME</Link>
                <hr />
                <p>
                    Albums
                </p>
                <Route path="albums/:name" component={Content} />
            </div>
        );
    }
}

export default About;