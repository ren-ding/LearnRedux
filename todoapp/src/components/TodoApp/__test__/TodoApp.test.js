import React from 'react';
import renderer from 'react-test-renderer';
import TodoApp from '../TodoApp';
import {Provider} from 'react-redux';
import configureStore from '../../../configureStore';

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
                    <TodoApp />
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});