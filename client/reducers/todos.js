export function todos(state = [], action) {
    switch (action.type) {
        case 'REFRESH_TODOS':
            return action.todos;
            break;
        default: return state;
    }
}