const initialState = {
    albums: [
        {
            id: 1,
            albumName: "First Album",
            artistName: "First Artist",
            gen: "Pop",
            year: "2017"
        }
    ]
};


export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ALBUM':
            let newAlbum = [...state.albums, action.payload];
            let newState = Object.assign({}, state, {albums: newAlbum});
        return newState;
        default:
        return state
    }
}