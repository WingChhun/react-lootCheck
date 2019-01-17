import * as constants from './constants';
import * as actions from "./balance";

const {SET_BALANCE} = constants;
const {setBalance} = actions;

describe("Redux - Action balance", () => {

    it("Creates an action to set the balance", () => {
        const balance = 0;

        const expectedAction = {
            type: SET_BALANCE,
            balance
        }

        expect(setBalance(balance)).toEqual(expectedAction);
    });

});