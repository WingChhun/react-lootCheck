import balanceReducer from "./balanceReducer";
import balanceReducer2 from "./balanceReducer";
import * as constants from "../../actions/balance/constants";
import {withdrawBalance} from "../../actions/balance/balance";

//NOTE: Pull constants from actions

const {SET_BALANCE} = constants;

//TODO: Keep updating this as balanceReducer grows
const initialState = {
    balance: 0
};

describe("Reducer - Balance", () => {

    const balance = 10;

    it("returns initialState correctly", () => {

        const action = {
            type: '_UNDEFINED'
        };

        expect(balanceReducer(undefined, action)).toEqual(initialState);

    });

    describe(`When initializing`, () => {

        it("Sets a balance", () => {

            const prevState = undefined;
            const action = {
                type: SET_BALANCE,
                balance
            };
            const expected = {
                ...initialState
            };

            expected.balance = balance;

            expect(balanceReducer(prevState, action)).toEqual(expected);
        })

        /*
NOTE: This is the cookie balance Reducer
*/

        describe(`Re-initializing w/ cookies`, () => {

            it(`Reads the balance from cookies`, () => {

                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        })

    })

    it(`deposits a balance`, () => {

        const payload = 10;
        const prevState = {
            ...initialState
        };
        const expected = {
            ...initialState,
            balance: payload
        }
        const action = {
            type: constants.DEPOSIT,
            payload
        };

        expect(balanceReducer(prevState, action)).toEqual(expected);

    });

    it(`withdraws amount from balance`, () => {

        const withdrawAmount = 10;
        const prevState = {
            balance: 10
        };
        const action = {
            type: constants.WITHDRAW,
            payload: withdrawAmount
        };
        const expectedState = {
            balance: 0
        };

        expect(balanceReducer(prevState, action)).toEqual(expectedState);

    });

}) //*End describe reducer-balance