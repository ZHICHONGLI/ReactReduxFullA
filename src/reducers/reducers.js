const initialState = {
    albums: [
        {
            _id: 1,
            title: "First Album",
            artist: "First Artist",
            gen: "Pop",
            year: "2017"
        }
    ],
    currentAlbum: {},
    loginStatus: false
};


export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ALBUM':
            let newAlbum = [...state.albums, action.payload];
            let newState = Object.assign({}, state, {albums: newAlbum});
        return newState;
        case 'DONE_GET_ITEMS':
            newAlbum = [...state.albums, ...action.payload];
            newState = Object.assign({}, state, {albums: newAlbum});
        return newState;
        case 'DONE_GET_ONE':
            if(action.payload == null){
                action.payload = undefined
            }
        return Object.assign({}, state, {currentAlbum: action.payload});
        case 'LOG_IN_SUCC':
        return Object.assign({}, state, {loginStatus: action.payload});
        case 'LOG_OUT':
        return Object.assign({}, state, {loginStatus: action.payload});
        default:
        return state
    }
}