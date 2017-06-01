import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Albums extends Component {
    render() {

        const Content = (props) => (
            <div style={{backgroundColor: 'lightblue'}}>
                <Link to="/albums">Albums</Link>
                <hr />
                <p>This Part is nested router</p>
                <p>album name...</p>
                <div>
                    name from Path params: 
                    <span style={{backgroundColor: 'red', fontSize:'20px'}}>{props.match.params.name}</span>
                </div>
            </div>
        );

        let mainAlbum = ({match}) => (
            <div>
                <p>
                    Albums main component, should show all albums list
                </p>
                {/* using {match} to inherit this.props.match */}
                <Link to={`${match.url}/new`}>
                    New Album Page
                </Link>
                <br />
                <Link to={`${match.url}/protected`}>To Protected Content</Link>
                <hr />
                <div>
                    {this.props.Albums.map(album =>(<div><p>ALBUM NAME: {album.albumName}</p><p>ARTIST NAME: {album.artistName}</p></div>))}
                </div>
                <hr />
            </div>
        );

        mainAlbum = connect(state => ({Albums: state.albums}))(mainAlbum);

        return (
            <div className="Albums">
                <Link to="/">HOME</Link>
                <hr />
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

/*
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
*/
export default connect(mapStateToProps, undefined)(Albums);