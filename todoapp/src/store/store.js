import {createStore, combineReducers} from 'redux'
import {todos, visibilityFilter} from '../reducer/reducer'

const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
  })

const store = createStore(todoApp);

export default store;