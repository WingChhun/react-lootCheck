import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Wallet extends Component {
    constructor(props)
    {
        super(props);

        this.state = {}
    }

    render()
    {

        const {balance} = this.props;

        return (
            <div>

                <h3 className="balance">
                    Wallet Balance: {balance}
                </h3>

            </div>
        )
    }

}

Wallet.propTypes = {
    balance: PropTypes.number.isRequired
}
export default Wallet;
