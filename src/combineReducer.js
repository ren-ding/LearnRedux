const deepFreeze = require('deepFreeze'); 
const expect = require('expect');
const Redux = require('redux');

const todo = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return Object.assign({},
                    {id: action.id,
                     text:action.text,
                     completed:false});
        case 'TOGGLE_TODO':
            if(state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {completed: !state.completed});
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, todo(undefined, action)];
        case 'TOGGLE_TODO':
            return state.map(t=>todo(t,action));
        default:
            return state;
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const combineReducers = (reducers) =>{
    return (state = {}, action) =>{
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](
                    state[key],
                    action
                );
                return nextState;
            },
            {}
        );
    };
};

const todoApp = (state = {}, action) => {
    return {
        todos: todos(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilter(
            state.visibilityFilter,
            action
        )
    };
};

const {createStore} = Redux;
const store = createStore(todoApp);

console.log('test passed!');