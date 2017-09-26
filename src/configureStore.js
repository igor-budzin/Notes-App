import { createStore } from 'redux';
import rootReducer from './reducers/rootReducers';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)

    if (module.hot) {
        module.hot.accept('./reducers/rootReducers', () => {
            const nextRootReducer = require('./reducers/rootReducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
