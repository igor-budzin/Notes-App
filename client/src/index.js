import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import configureStore from './configureStore';
import NotesApp from './NotesApp';


axios.get('/notes')
.then((response) => {

    let initialState = {
        notesReducer: response.data
    }

    const store = configureStore(initialState);
    store.subscribe(() => {
        console.log("Fire");
    });
    window.store = store;

    ReactDOM.render(
        <Provider store={store}>
            <NotesApp />
        </Provider>,
        document.getElementById('root')
    );
})
.catch((error) => {
    console.log(error);
});

// axios.post('/notes', {
//     text: "Other test task " + Date.now(),
//     color: 'yellow'
// })
//
// .then((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.log(error);
// });
