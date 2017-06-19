import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import actionCreators from '../actions/index';
import '../sass/Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.actions = bindActionCreators(actionCreators, this.props.dispatch);
    }
    componentWillMount() {
        document.title = 'Home - All the Albums you like';
        // console.log(this.actions)
        this.actions.getPopular();
    }
    render() {
        return (
            <div className='home-page'>
                <section className='home-popular'>
                    <h2 className='popular-header'>Popular Albums</h2>
                    <hr />
                    <div className='row'>
                    {
                        this.props.popularAlbums.map(popAlbum => (
                            <div className='col-sm-4 pop-album' key={popAlbum._id}>
                                <Link to={{pathname: 'dbalbum/'+popAlbum._id}}>
                                    <img src={popAlbum.img} width='300' className='img-thumbnail'></img>
                                </Link>
                                <Link to={{pathname: 'dbalbum/'+popAlbum._id}}>
                                    <br/>
                                    <span>title: {popAlbum.title}</span><br/>
                                    <span>artist: {popAlbum.artist}</span><br/>
                                    <span>gen: {popAlbum.gen}</span>
                                </Link>                             
                            </div>
                        ))
                    }
                    </div>
                </section>
                <section className="popular-artists">
                    <h3 className="title">Popular Aitists</h3>
                    <hr/>
                    <div className="row">
                    
                    </div>
                </section>
                
            </div>
        )
    }
}

export default connect(state => {
    return {
        popularAlbums: state.home.popularAlbums
    };
})(Home);