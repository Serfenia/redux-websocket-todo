import { createStore } from 'redux'

import rootReducer from './reducers/index'

const defaultState = {
    todos: []
};

let middleware = null;
if (window.devToolsExtension) {
    middleware = window.devToolsExtension();
} else {
    middleware = null;
}

const store = createStore(rootReducer, defaultState, middleware);
export default store;
