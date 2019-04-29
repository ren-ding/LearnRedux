import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp/TodoApp';
import * as serviceWorker from './serviceWorker';
import store from './store/store'

const render = () => {
    ReactDOM.render(<TodoApp {...store.getState()}/>, document.getElementById('root'));
}

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
