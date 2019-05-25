import React from 'react';
import renderer from 'react-test-renderer';
import AddTodo from '../AddTodo'

describe('AddTodo',()=>{ 
    describe('render',()=>{
        it('should render match with snapshot',()=> {
            const tree = renderer.create(<AddTodo />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});