import React from 'react';
import renderer from 'react-test-renderer';
import AddTodo from '../AddTodo';
import {store} from '../../../store/store';
import {Provider} from 'react-redux';

describe('AddTodo',()=>{ 
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
                    <AddTodo />
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});