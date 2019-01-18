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

    it(`Creates an input to deposit into or withdraw from the balance`, () => {

        expect(app.find('.input-wallet').exists()).toBeTruthy();

    });

    describe(`When a user inputs into input-wallet`, () => {
        const value = `Hello World`;
        const event = {
            target: {
                value
            }
        };

        it(`Updates the 'value' in state`, () => {

            app
                .find('.input-wallet')
                .simulate('change', event);

            expect(app.state().value).toEqual(value);

        });

    });

    describe(`Functions`, () => {

        it(`handleChange() updates state`, () => {
            const wrapper = shallow(<Wallet {...props}/>);
            const event = {
                target: {
                    value: 10
                }
            };
            wrapper
                .instance()
                .handleChange(event);

            expect(wrapper.state().value).toEqual(event.target.value);

        });
    });

})
