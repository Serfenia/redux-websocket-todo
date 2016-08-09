import store from './../store';
import { refreshTodos } from './../actions/todos';

export default function (socket) {
    socket.on('todos', (todos) => {
        store.dispatch(refreshTodos(todos));
    });
}
