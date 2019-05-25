import React from 'react';
import renderer from 'react-test-renderer';
import TodoApp from '../TodoApp';
import store from '../../../store/store';
import {Provider} from 'react-redux';

describe('TodoApp',()=>{
    let props;

    beforeEach(()=>{
        props = {
            store: store
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