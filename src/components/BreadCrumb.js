import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../sass/BreadCrumb.scss';

class BreadCrumb extends Component { 
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navbars row">
                <ol>
                    {
                        this.props.crumbs.map((crumb, i) => {
                            if(this.props.crumbs.length -1 === i) {
                                return (
                                    <li className="path-li" key={i}>
                                        {crumb.name}
                                    </li>
                                )
                            }
                            return (
                                <li  className="path-li" key={i}>
                                    <Link to={crumb.path}>{crumb.name}</Link>
                                    <span> /</span>
                                </li>
                            )
                        })
                    }
                </ol>
            </nav>
        );
    }
}

export default BreadCrumb;