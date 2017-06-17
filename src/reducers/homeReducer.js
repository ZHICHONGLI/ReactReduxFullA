const initialState = {
    popularAlbums: [
        {
            _id: 0,
            title: "Popular Album 0",
            artist: "Artist 0",
            gen: "Pop",
            year: "2017"
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_HOME_POPULAR':
        return Object.assign({}, state, {popularAlbums: action.payload});
        default:
        return initialState;
    }
}