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

    render()
    {
        return (
            <div>

                <h3>Bitcoin Balance: $</h3>

            </div>
        )
    }
}

export default Loot;