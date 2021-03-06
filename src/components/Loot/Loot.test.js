import React from 'react';
import {shallow, mount} from 'enzyme';
import LootView from "./Loot.view";

let props = {

    balance: 10,
    bitcoin: {},
    fetchBitcoin: jest.fn()
};

/*
Note: mount fires the lifecycle methods and inner children ( inner cycle hooks rather than shallow)
*/
describe(`Component - Loot`, () => {

    let Loot = shallow(<LootView {...props}/>);

    it(`Renders without crashing`, () => {
        expect(Loot).toMatchSnapshot();

    });

    describe(`when mounted`, () => {

        let LootMount = null;

        beforeEach(() => {
            LootMount = mount(<LootView {...props}/>);

        })

        it(`dispatches a fetchBitcoin() when mounted`, () => {

            expect(props.fetchBitcoin).toHaveBeenCalled();

        });

    });

    describe(`When there are valid bitcoin props`, () => {

        beforeEach(() => {
            const props = {
                fetchBitcoin: jest.fn(),

                balance: 10,
                bitcoin: {
                    bpi: {
                        USD: {
                            rate: '1,000'
                        }
                    }
                }
            };

            Loot = shallow(<LootView {...props}/>);
        });

        it(`Displays the correct bitcoin value`, () => {});
    });
});
