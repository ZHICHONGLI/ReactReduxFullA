import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
// import actions from '../actions/index';
import '../sass/DbAlbum.scss';

class dbAlbum extends Component {
    constructor(props) {
        super(props);
        this.state={
            Album: undefined
        };
    }

    componentDidMount() {
        fetch(`https://api.douban.com/v2/music/${this.props.match.params.id}`
        ).then(response =>
            response.json()
        ).then(response => {
            console.log(response);
            this.setState({Album: response});
            document.title = response.attrs.title[0]+' '+ response.alt_title+' '+response.author[0].name;
        }  
        ).catch(err => {
            console.log(err)
        });
        
        // this.props.actions.getOneItem(this.props.match.params.name);
    }
    render() {
        return (
            <div className="db-album">
                <Link to="/albums">Albums</Link>
                <hr />
                <p>This Part is nested router</p>
                <p>album name...</p>
                <div>
                    name from Path params: 
                    <span style={{backgroundColor: 'red', fontSize:'20px'}}>{this.props.match.params.id}</span>
                </div>
                <hr />
                <div>
                    <p>Fetched from douban by API</p>
                    <button onClick={()=>console.log(this.state)}>test</button>
                    {
                        (this.state.Album === undefined) ?
                        (<h2>Loading...</h2>) 
                        : (<div>
                                <p>TITLE: {this.state.Album.attrs.title[0]}</p>
                                <p>ARTIST: {this.state.Album.author[0].name}</p>
                                <p>YEAR: {this.state.Album.attrs.pubdate[0]}</p>
                            </div>)
                    }
                </div>
            </div>
        );
    }
}

export default dbAlbum;