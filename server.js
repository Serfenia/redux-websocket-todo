require('babel-core/register');
require('babel-polyfill');
const express = require('express');
const server = require('http').Server(express());

const io = require('socket.io')(server);
const todos = [{
    content: 'First todo'
}, {
    content: 'Second todo'
}];

server.listen(3000, () => {
    io.on('connection', (socket) => {
        socket.on('todos/search', (filters) => {
            const result = todos.filter((todo) => {
                return filters.search === '' || todo.content.toLowerCase().indexOf(filters.search.toLowerCase()) !== -1;
            });
            socket.emit('todos', result);
        });
        socket.on('todos/create', (todo) => {
            todos.push(todo);
            socket.emit('todos', todos);
        });
        socket.on('todos/destroy', (index) => {
            todos.splice(index, 1);
            socket.emit('todos', todos);
        });
    })
});
