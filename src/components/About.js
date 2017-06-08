import React, {Component} from 'react';
import LoginStatus from './LoginStatus';
import {Link} from 'react-router-dom';
import '../sass/About.scss';

class About extends Component {
    render() {
        return (
            <div className="About">
                <Link to="/">HOME</Link>
                <hr />
                <p className='content'>
                    This is About Page
                </p>
            </div>
        );
    }
}

export default About;