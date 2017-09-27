import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import NotesApp from './NotesApp';

const store = configureStore();
store.subscribe(() => {
    console.log("Fire");
})
window.store = store;


ReactDOM.render(
    <Provider store={store}>
        <NotesApp />
    </Provider>,
    document.getElementById('root')
);
