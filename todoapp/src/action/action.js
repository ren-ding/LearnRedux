import {v4} from 'node-uuid';

const addTodo = (text) => ({
    type:'ADD_TODO',
    id: v4(),
    text: text
});

const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

export {addTodo, toggleTodo}