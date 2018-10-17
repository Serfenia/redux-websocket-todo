import socket from './../socket';
import listeners from './../listeners/todos';

listeners(socket);

export function searchTodos(filters) {
    socket.emit('todos/search', filters);
    return {type: 'SEARCH_TODOS', filters};
}

export function saveTodo(todo) {
    socket.emit('todos/create', todo);
    return {type: 'SAVE_TODO', todo};
}

export function deleteTodo(index) {
    socket.emit('todos/destroy', index);
    return {type: 'DELETE_TODO', index};
}

