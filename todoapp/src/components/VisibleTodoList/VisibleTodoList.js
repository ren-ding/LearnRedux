import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {toggleTodo} from '../../action/action';

const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(
                todo => todo.completed
                );
        case 'active':
            return todos.filter(
                todo => !todo.completed
            );
        default:
            return todos;
    }
};

const Todo = ({
    onClick,
    completed,
    text
}) => (
    <li
        onClick ={onClick}
        style={{textDecoration: completed?
                'line-through':
                'none'}}
    >
        {text}
    </li>
);

const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo => 
            <Todo
                key={todo.id}
                {...todo}
                onClick = {() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);

const mapStateToTodoListProps = (
    state,
    { match: { params: { filter } } }
) => ({
    todos: getVisibleTodos(
        state.todos,
        filter || 'all'
    )
});

// const mapDispatchToTodoListProps = (
//     dispatch
// ) => ({
//     onTodoClick : (id) => {
//         dispatch(toggleTodo(id));
//     }
// });

const VisibleTodoList = withRouter(connect(
    mapStateToTodoListProps,
    {onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;