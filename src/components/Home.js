import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../sass/Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home-page'>
                HOME PAGE
            </div>
        )
    }
}

export default Home;