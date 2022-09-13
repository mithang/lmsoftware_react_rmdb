import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// it('renders without crashing', ()=>{
// const div = document.createElement('div');
// ReactDOM.render(<App/>,div);
// });

describe('App component', ()=>{
    test('1=1',()=>{
        expect(1).to.equal(1);
    });

    test('1#2',()=>{
        expect(1).to.equal(2);
    });

});