import React from 'react';
import renderer from 'react-test-renderer';
import VisibleTodoList from '../VisibleTodoList'

describe('VisibleTodoList',()=>{ 
    let props;

    beforeEach(()=>{
        props = {
            todos:[],
            visibilityFilter:''
        }
    });

    describe('render',()=>{
        it('should render match with snapshot',()=> {
            const tree = renderer.create(<VisibleTodoList {...props}/>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});