import React, {Component} from 'react';
import {StoreContext} from '../../store/store'

class VisibleTodoList extends Component {
    componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(()=>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const {store} = this.context;
        const state = store.getState();

        return (
            <TodoList
                todos = {
                    getVisibleTodos(
                        state.todos,
                        state.visibilityFilter
                    )
                }
                onTodoClick = {id =>{
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    });
                }}
            />
        );
    }
}


const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                todo => todo.completed
                );
        case 'SHOW_ACTIVE':
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

export default VisibleTodoList;

VisibleTodoList.contextType = StoreContext;