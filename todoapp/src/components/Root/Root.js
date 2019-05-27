import React from 'react';
import {Provider} from 'react-redux';
import TodoApp from '../TodoApp/TodoApp';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = ({store}) => (
    <Provider store = {store}>
        <BrowserRouter >
            <Route path='/:filter?' render={props => <TodoApp {...props} />} />
        </BrowserRouter >
    </Provider>
)

export default Root;