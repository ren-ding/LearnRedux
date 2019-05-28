import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import * as actions from '../../actions';
import {getVisibleTodos} from '../../reducer/index'

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps){
        if(this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const {filter, fetchTodos} = this.props;
        fetchTodos(filter);
    }

    render(){
        const {toggleTodo, ...rest} = this.props;
        return (
            <TodoList 
                {...rest}
                onTodoClick = {toggleTodo} 
            />
        );
    }
}


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
    { match: { params } }
) => {
    const filter = params.filter || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        filter
    }
};

// const mapDispatchToTodoListProps = (
//     dispatch
// ) => ({
//     onTodoClick : (id) => {
//         dispatch(toggleTodo(id));
//     }
// });

VisibleTodoList = withRouter(connect(
    mapStateToTodoListProps,
    actions
)(VisibleTodoList));

export default VisibleTodoList;