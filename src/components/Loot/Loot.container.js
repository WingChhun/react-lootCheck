import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LootView from "./Loot.view";
import * as actions from "../../redux/actions/bitcoin/bitcoin";

const mapStateToProps = state => ({balance: state.balance.balance, bitcoin: state.bitcoin});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    fetchBitcoin: actions.fetchBitcoin
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LootView);