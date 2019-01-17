import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

const props = {};

describe(`App Component`, () => {

  const app = shallow(<App {...props}/>);

  it('renders without crashing', () => {

    expect(app).toMatchSnapshot();

  });
})
