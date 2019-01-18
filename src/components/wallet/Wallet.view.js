import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
class Wallet extends Component {
    constructor(props)
    {
        super(props);

        this.state = {

            value: 0
        };
    }

    /*
@function: componentWillReceiveProps,
@params: props:Object
@desc: Update balance in state after every dispatched action to update redu store
    */
    componentWillReceiveProps = props => {
        const {balance} = props;

        this.setState({balance});
    }

    handleChange = (event) => {
        const value = event.target.value;

        this.setState({value});
    }

    render()
    {

        const {balance, deposit, withdrawBalance} = this.props;
        const {value} = this.state;

        return (
            <div>

                <h3 className="balance">
                    Wallet Balance: {balance}
                </h3>

                <br/>

                <input
                    type='text'
                    className='input-wallet'
                    onChange={(event) => this.handleChange(event)}/>

                <Button
                    type='submit'
                    className="btn-deposit"
                    onClick={deposit(parseInt(value, 10))}>Deposit</Button>

                <Button
                    type='submit'
                    className="btn-withdraw"
                    onClick={withdrawBalance(parseInt(value, 10))}>Withdraw</Button>

            </div>
        )
    }

}

Wallet.propTypes = {
    balance: PropTypes.number.isRequired
}
export default Wallet;
