import {createStore} from 'redux'
import todoApp from './reducer/index'

// const persistedState = {
//     todos: [{
//         id:'0',
//         text:'Welcome back',
//         completed: false
//     }]
// };

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    if(!console.group) return rawDispatch;

    return (action) => {
        console.group(action.type);
        console.log('prev state', 'color:gray', store.getState());
        console.log('action','color:blue',action);
        const returnValue = rawDispatch(action);
        console.log('next state','color:green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    };
};

const configureStore = () => {
    const store = createStore(
        todoApp,
        //persistedState
    );

    if(process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store);
    }

    return store;
}

export default configureStore;