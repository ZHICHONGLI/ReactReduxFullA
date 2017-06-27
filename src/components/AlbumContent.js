import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import fetch from 'isomorphic-fetch';
import actions from '../actions/index';
import BreadCrumb from '../components/BreadCrumb';
import '../sass/AlbumContent.scss';

class Content extends Component {
    componentDidMount() {
        /*
        fetch(`http://localhost:4300/albums/name/${this.props.match.params.name}`
        ).then(response =>
            response.json()
        ).then(response =>
            console.log(response)
        ).catch(err => {
            console.log(err)
        });
        */
        this.props.actions.getOneItem(this.props.match.params.name);
    }
    crumbs = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Albums',
            path: '/albums'
        },
        {
            name: `${this.props.match.params.name}`,
            path: ''
        }
    ];
    render() {
        return (
            <div className="albumcontent">
                <BreadCrumb crumbs={this.crumbs} />
                <hr />
                <p>This Part is nested router</p>
                <p>album name...</p>
                <div>
                    name from Path params: 
                    <span style={{backgroundColor: 'red', fontSize:'20px'}}>{this.props.match.params.name}</span>
                </div>
                <hr />
                <div className="fetchedalbum">
                    <p>FROM ACTION FETCH TO REDUCER STORE</p>
                    {
                        (this.props.Album === undefined) ?
                        (<h2>Album Cannot Found...</h2>) 
                        : (<div>
                                <p>TITLE: {this.props.Album.title}</p>
                                <p>ARTIST: {this.props.Album.artist}</p>
                                <p>YEAR: {this.props.Album.released}</p>
                            </div>)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Album: state.totalList.currentAlbum
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Content);