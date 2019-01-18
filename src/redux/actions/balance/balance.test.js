import * as constants from './constants';
import * as actions from "./balance";

const {SET_BALANCE, DEPOSIT} = constants;
const {setBalance, deposit} = actions;

describe("Redux - Action balance", () => {

    it("Creates an action to set the balance", () => {
        const balance = 0;

        const expectedAction = {
            type: SET_BALANCE,
            balance
        }

        expect(setBalance(balance)).toEqual(expectedAction);
    });

    it(`Creates an action to deposit`, () => {

        const depositValue = "10";
        const expectedAction = {
            type: DEPOSIT,
            payload: depositValue
        };

        expect(deposit(depositValue)).toEqual(expectedAction);

    });

    it(`Creates an action to withdraw`, () => {

        const withdrawAmount = '10';
        const expectedAction = {
            type: constants.WITHDRAW,
            payload: withdrawAmount
        }

        expect(actions.withdrawBalance(withdrawAmount)).toEqual(expectedAction);

    });

});