import React from 'react';
import renderer from 'react-test-renderer';
import TodoApp from '../TodoApp'

describe('TodoApp',()=>{
    describe('render',()=>{
        it('should render match with snapshot',()=> {
            const tree = renderer.create(<TodoApp />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});