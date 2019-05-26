import React from 'react';
import renderer from 'react-test-renderer';
import AddTodo from '../AddTodo';
import configureStore from '../../../configureStore';

describe('AddTodo',()=>{ 
    let props;

    beforeEach(()=>{
        props = {
            store: configureStore()
        }
    });

    describe('render',()=>{
        it('should render match with snapshot',()=> {
            const tree = renderer.create(<AddTodo {...props}/>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});