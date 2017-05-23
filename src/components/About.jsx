import React, {Component} from 'react';
import LoginStatus from './LoginStatus';
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="About">
                <Link to="/">HOME</Link>
                <hr />
                <p>
                    This is About Page
                </p>
            </div>
        );
    }
}

export default About;