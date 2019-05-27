import React from 'react';
import renderer from 'react-test-renderer';
import TodoApp from '../TodoApp';
import {Provider} from 'react-redux';
import configureStore from '../../../configureStore';
import { BrowserRouter, Route } from 'react-router-dom';

describe('TodoApp',()=>{
    let props;

    beforeEach(()=>{
        props = {
            store: configureStore()
        }
    });

    describe('render',()=>{
        it('should render match with snapshot',()=> {
            const tree = renderer.create(
                <Provider {...props}>
                    <BrowserRouter >
                        <Route path='/:filter?' render={props => <TodoApp {...props} />} />
                    </BrowserRouter >
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});