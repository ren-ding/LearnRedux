import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {toggleTodo} from '../../action/action';
import {getVisibleTodos} from '../../reducer/index' 

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
        state,
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