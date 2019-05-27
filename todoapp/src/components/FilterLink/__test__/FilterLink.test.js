import React from 'react';
import renderer from 'react-test-renderer';
import FilterLink from '../FilterLink';
import {BrowserRouter} from 'react-router-dom';

describe('FilterLink',()=>{ 
    let props;

    beforeEach(()=>{
        props = {
            filter: 'all'
        }
    });

    describe('render',()=>{
        it('should render match with snapshot',()=> {
            const tree = renderer.create(
                <BrowserRouter>
                <FilterLink {...props}/>
                </BrowserRouter>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});