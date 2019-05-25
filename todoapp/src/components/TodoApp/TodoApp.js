import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import FilterLink from '../FilterLink/FilterLink';
import VisibleTodoList from '../VisibleTodoList/VisibleTodoList';

const Footer = () => {
    return (
        <p>
            Show: 
            {' '}
            <FilterLink filter='SHOW_ALL'>
                All
            </FilterLink>
            {' '}
            <FilterLink filter='SHOW_ACTIVE'>
                Active
            </FilterLink>
            {' '}
            <FilterLink filter='SHOW_COMPLETED'>
                Completed
            </FilterLink>
        </p>
    );
};

const TodoApp  = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default TodoApp;