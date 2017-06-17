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
                            <Link to={{pathname: 'albums/'+popAlbum.title}} key={popAlbum._id}>
                                <div className='col-sm-4 pop-album'>
                                <img src={popAlbum.img} width='300' className='img-thumbnail'></img>
                                <p>title: {popAlbum.title}</p>
                                <p>artist: {popAlbum.artist}</p>
                                <p>gen: {popAlbum.gen}</p>                                
                                </div>
                            </Link>
                            
                        ))
                    }
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