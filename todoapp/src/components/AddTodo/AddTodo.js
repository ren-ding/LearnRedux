import React from 'react';
import {StoreContext} from '../../store/store'

let nextTodoId = 0;

const AddTodo = () => {
    let input;
    return (
        <StoreContext.Consumer>
            {({store}) =>
                (<div>
                    <input ref={ node => {
                        input = node;
                    }}
                    />
                    <button onClick= {()=>{
                        store.dispatch({
                            type:'ADD_TODO',
                            id: nextTodoId++,
                            text: input.value
                        })
                        input.value='';
                    }}>
                    Add Todo
                    </button>
                 </div>
                )
            }
        
        </StoreContext.Consumer>
    );
};

export default AddTodo;