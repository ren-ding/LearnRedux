const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener())
    };

    const subscribe = (listener) => {
        listeners.push(listener);

        return () =>{
            listners = listeners.filter(l=>l !== listener);
        }
    };

    dispatch({});

    return {getState, dispatch, subscribe};
}


const counter = (state=0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(counter);

store.subscribe(()=>console.log(store.getState()));

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});

console.log('app end!');