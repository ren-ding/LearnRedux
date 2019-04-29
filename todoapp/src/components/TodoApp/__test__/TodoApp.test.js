import React from 'react';
import renderer from 'react-test-renderer';
import TodoApp from '../TodoApp'

describe('TodoApp',()=>{
    let props;

    beforeEach(()=>{
        props = {
            todos:[],
            visibilityFilter:''
        }
    });
    
    describe('render',()=>{
        it('should render match with snapshot',()=> {
            const tree = renderer.create(<TodoApp {...props} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});