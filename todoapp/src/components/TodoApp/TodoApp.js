import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import FilterLink from '../FilterLink/FilterLink';
import VisibleTodoList from '../VisibleTodoList/VisibleTodoList';

const Footer = () => {
    return (
        <p>
            Show: 
            {' '}
            <FilterLink filter='all'>
                All
            </FilterLink>
            {' '}
            <FilterLink filter='active'>
                Active
            </FilterLink>
            {' '}
            <FilterLink filter='completed'>
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