import React from 'react';
import renderer from 'react-test-renderer';
import FilterLink from '../FilterLink'

describe('FilterLink',()=>{ 
    let props;

    beforeEach(()=>{
        props = {
            todos:[],
            visibilityFilter:''
        }
    });

    describe('render',()=>{
        it('should render match with snapshot',()=> {
            const tree = renderer.create(<FilterLink {...props}/>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});