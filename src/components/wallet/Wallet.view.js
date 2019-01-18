import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Wallet extends Component {
    constructor(props)
    {
        super(props);

        this.state = {

            value: 0
        };
    }

    handleChange = (event) => {
        const value = event.target.value;

        this.setState({value});
    }

    render()
    {

        const {balance} = this.props;

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

            </div>
        )
    }

}

Wallet.propTypes = {
    balance: PropTypes.number.isRequired
}
export default Wallet;
