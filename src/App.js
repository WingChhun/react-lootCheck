import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import WalletContainer from "./components/wallet/Wallet.container";
import Wallet from './components/wallet/Wallet.view';
class App extends Component {
  render() {
    return (
      <div>
        <h2>
          Loot Check</h2>

        <WalletContainer/>

      </div>
    );
  }
}

export default App;
