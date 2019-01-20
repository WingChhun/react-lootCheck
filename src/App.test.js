import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

const props = {};

describe(`App Component`, () => {

  const app = shallow(<App {...props}/>);

  it('renders without crashing', () => {

    expect(app).toMatchSnapshot();

  });

  it(`Contains a Wallet Component`, () => {

    const expectedWallet = `Connect(Wallet)`;

    expect(app.find(expectedWallet).exists()).toBeTruthy();

  })

  it(`Contains a Loot Component`, () => {
    const expectedLoot = `Connect(Loot)`;

    expect(app.find(expectedLoot).exists()).toBeTruthy();
  })

  it(`Contains a link to the coindesk price page`, () => {

    const url = `https://www.coindesk.com/price`;

    expect(app.find('a').props().href).toBe(url);
  })

})
