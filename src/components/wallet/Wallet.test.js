import React from 'react';
import {shallow} from 'enzyme';
import Wallet from "./wallet.container";

const props = {};

describe(`Component - Wallet`, () => {
    const app = shallow(<Wallet {...props}/>);

    it(`renders without crashing`, () => {
        expect(Wallet).toMatchSnapshot();
    })

})
