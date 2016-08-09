import { combineReducers } from 'redux';

import {todos, todo} from './todos';

export default combineReducers({
    todos,
    todo
});
