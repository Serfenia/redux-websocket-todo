export function searchTodos(filters) {
    return {type: 'SEARCH_TODOS', filters};
}

export function refreshTodos(todos) {
    return {type: 'REFRESH_TODOS', todos};
}

export function saveTodo(todo) {
    return {type: 'SAVE_TODO', todo};
}

export function deleteTodo(index) {
    return {type: 'DELETE_TODO', index};
}

