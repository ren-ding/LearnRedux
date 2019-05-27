import React from 'react';
import renderer from 'react-test-renderer';
import VisibleTodoList from '../VisibleTodoList';
import configureStore from '../../../configureStore';
import {BrowserRouter} from 'react-router-dom';

describe('VisibleTodoList',()=>{ 
    let props;

    beforeEach(()=>{
        props = {
            store: configureStore()
        }
    });

    describe('render',()=>{
        it('should render match with snapshot',()=> {
            const tree = renderer.create(
                <BrowserRouter>
                    <VisibleTodoList {...props}/>
                </BrowserRouter>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});