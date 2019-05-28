import React from 'react';
import renderer from 'react-test-renderer';
import FetchError from '../FetchError';
import {BrowserRouter} from 'react-router-dom';

describe('FetchError',()=>{ 
    let props;

    beforeEach(()=>{
        props = {
            message: '',
            onRetry: ()=>{}
        }
    });

    describe('render',()=>{
        it('should render match with snapshot',()=> {
            const tree = renderer.create(
                <BrowserRouter>
                <FetchError {...props}/>
                </BrowserRouter>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});