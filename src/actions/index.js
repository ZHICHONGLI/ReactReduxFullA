import fetch from 'isomorphic-fetch';

const popularAlbumsMock = [
        {
            _id: 27047560,
            title: "Popular Album 1",
            artist: "First Artist",
            gen: "Pop",
            year: "2017",
            img: "https://img1.doubanio.com/lpic/s29465057.jpg"
        },{
            _id: 26992306,
            title: "Popular Album 2",
            artist: "2nd Artist",
            gen: "Pop",
            year: "2017",
            img: "https://img3.doubanio.com/lpic/s29391060.jpg"
        }
    ];

const actions = {
    getItems: () => (dispatch) => {
        fetch('http://localhost:4300/albums'
        ).then(response => 
            // dispatch(actions.doneGetitems(data));
            response.json() // CANNOT BE INSIDE A {}
        ).then(data => {
            dispatch(actions.doneGetitems(data));
            // console.log(data)
        }
        )
        .catch(error => {
            // dispatch(actions.failGetitems(error));
            console.log('getitems.fail');
            console.log(error);
        });
    },
    
    doneGetitems: data => ({
        type: 'DONE_GET_ITEMS',
        payload: data
    }),

    failGetitems: error => ({
        type: 'FAIL_GET_ITEMS',
        payload: new Error(error),
        error: true
    }),

    getOneItem: (name) => (dispatch) => {
        fetch('http://localhost:4300/albums/name/'+name
        ).then(response =>
            response.json()
        ).then(response =>
            dispatch(actions.doneGetOne(response))
        ).catch(err => {
            console.log(err)
        });
    },

    doneGetOne: response => ({
        type: 'DONE_GET_ONE',
        payload: response
    }),

    getPopular: () => (dispatch) => {
        dispatch(actions.getPopularSucc(popularAlbumsMock))
    },

    getPopularSucc: mock => ({
        type: 'GET_HOME_POPULAR',
        payload: mock
    }),

    logIn: () => ({
        type: 'LOG_IN_SUCC',
        payload: true
    }),

    logOut: () => ({
        type: 'LOG_OUT',
        payload: false
    })

};

export default actions;