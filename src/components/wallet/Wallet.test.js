import React from 'react';
import {shallow} from 'enzyme';
import Wallet from "./Wallet.view";

const props = {
    balance: 10,
    setBalance: jest.fn()
};

describe(`Component - Wallet`, () => {
    const app = shallow(<Wallet {...props}/>);

    it(`renders without crashing`, () => {
        expect(Wallet).toMatchSnapshot();
    })

    it(`renders 'balance' from props`, () => {

        const expected = `Wallet Balance: ${props.balance}`
        const walletBalance = app.find(".balance");

        expect(walletBalance.text()).toEqual(expected);

    })

})
