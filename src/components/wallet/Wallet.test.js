import React from 'react';
import {shallow} from 'enzyme';
import Wallet from "./Wallet.view";

const props = {
    balance: 10,
    setBalance: jest.fn(),
    deposit: jest.fn(),
    withdrawBalance: jest.fn()
};
const initialState = {
    value: 0
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
        const value = `25`;
        const event = {
            target: {
                value
            }
        };

        beforeEach(() => {

            app
                .find('.input-wallet')
                .simulate('change', event);
        })

        afterEach(() => {
            app.setState({
                ...initialState
            });
        })

        it(`Updates the 'value' in state`, () => {

            expect(app.state().value).toEqual(value);

        });

        describe(`User wants to make a deposit`, () => {

            //TODO: Assume button exist

            beforeEach(() => {
                app
                    .find('.btn-deposit')
                    .simulate('click');
            });

            it(`dispatches the 'deposit() it receives from props with local balance`, () => {

                expect(props.deposit).toHaveBeenCalledWith(parseInt(value, 10));

            });

        });

    });

    describe(`Functions`, () => {

        beforeEach(() => {});
        afterEach(() => {});

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
