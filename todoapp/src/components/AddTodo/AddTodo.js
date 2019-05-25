import React from 'react';
import {ReactReduxContext} from 'react-redux'

let nextTodoId = 0;

const AddTodo = () => {
    let input;
    return (
        <ReactReduxContext.Consumer>
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
        
        </ReactReduxContext.Consumer>
    );
};

export default AddTodo;