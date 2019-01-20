import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Loot extends Component {
    constructor(props)
    {
        super(props);

        this.state = {}

    }

    componentDidMount = () => {
        this
            .props
            .fetchBitcoin();
    }

    componentWillReceiveProps = props => {}

    computeBitcoin = () => {
        const {bitcoin, balance} = this.props;

        return (Object.keys(bitcoin).length === 0)
            ? ''
            : balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);

    }

    render()
    {

        return (
            <div>

                <h3>Bitcoin Balance: {this.computeBitcoin()}</h3>

            </div>
        )
    }
}

export default Loot;