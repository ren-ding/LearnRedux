import React from 'react';
import {createStore} from 'redux'
import todoApp from '../reducer/reducer'

const store = createStore(todoApp);
const StoreContext = React.createContext({
    store: store
});

export {store, StoreContext};