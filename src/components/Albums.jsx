import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import fetch from 'isomorphic-fetch';
import actions from '../actions/index';
import Content from './AlbumContent';
import BreadCrumb from '../components/BreadCrumb.js';
import '../sass/Albums.scss';

const crumbs = [
    {
        name: 'Home',
        path: '/'
    },{
        name: 'Albums',
        path: '/albums'
    }
];

class Albums extends Component {
    render() {
        const actions = this.props.actions;
        let mainAlbum = ({match}) => (
            <div className='main-album'>
                <BreadCrumb crumbs={crumbs}/>
                <p>
                    Albums main component, should show all albums list
                </p>
                {/* using {match} to inherit this.props.match */}
                <Link to={`${match.url}/new`}>
                    New Album Page
                </Link>
                <hr />
                <div>
                    {this.props.Albums.map(album =>(<div key={album._id}><p>ALBUM NAME: {album.title}</p><p>ARTIST NAME: {album.artist}</p><Link to={`${match.url}/${album.title}`}>detail</Link><hr /></div>))}
                </div>
                <hr />
                <button onClick={() => actions.getItems()}>All Albums</button>
            </div>
        );

        mainAlbum = connect(state => ({Albums: state.albums}))(mainAlbum);
        /*
        const fetchData = () => {
            fetch('http://localhost:4300/albums'
            ).then(response => 
                response.json()
            ).then( response => {
                console.log(response);
            })
        };
        */
        return (
            <div className="Albums">
                <Switch>
                    <Route exact path={this.props.match.url} component={mainAlbum} />
                    <Route path={`${this.props.match.url}/:name`} component={Content} />
                </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Albums);