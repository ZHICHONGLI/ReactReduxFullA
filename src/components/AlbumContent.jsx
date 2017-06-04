import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import actions from '../actions/index';

class Content extends Component {
    componentDidMount() {
        fetch(`http://localhost:4300/albums/name/${this.props.match.params.name}`
        ).then(response =>
            response.json()
        ).then(response =>
            console.log(response)
        ).catch(err => {
            console.log(err)
        });
        // console.log(this.props)
    }
    render() {
        return (
            <div style={{backgroundColor: 'lightblue'}}>
                <Link to="/albums">Albums</Link>
                <hr />
                <p>This Part is nested router</p>
                <p>album name...</p>
                <div>
                    name from Path params: 
                    <span style={{backgroundColor: 'red', fontSize:'20px'}}>{this.props.match.params.name}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Albums: state.totalList.albums
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Content);