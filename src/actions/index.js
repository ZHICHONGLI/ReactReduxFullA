import fetch from 'isomorphic-fetch';

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
    })
};

export default actions;