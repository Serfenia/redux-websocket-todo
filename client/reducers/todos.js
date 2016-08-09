import socket from './../socket';
import listeners from './../listeners/todos';

listeners(socket);

export function todos(state = [], action) {
    switch (action.type) {
        case 'SEARCH_TODOS':
            socket.emit('todos/search', action.filters);
            // Search filters could be saved here.
            break;
        case 'SAVE_TODO':
            socket.emit('todos/create', action.todo);
            break;
        case 'DELETE_TODO':
            socket.emit('todos/destroy', action.index);
            break;
        case 'REFRESH_TODOS':
            return action.todos;
            break;
    }
    return state
}