import React from 'react';
import WalletView from "./Wallet.view";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from "../../redux/actions/balance/balance";

const mapStateToProps = state => ({balance: state.balance.balance});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    setBalance: actions.setBalance,
    deposit: actions.deposit,
    withdrawBalance: actions.withdrawBalance
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WalletView);
