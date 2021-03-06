import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import WalletContainer from "./components/wallet/Wallet.container";
import Wallet from './components/wallet/Wallet.view';
import LootContainer from './components/Loot/Loot.container';
class App extends Component {
  render() {
    return (
      <div>
        <h2>
          Loot Check</h2>

        <WalletContainer/>

        <hr/>
        <br/>
        <LootContainer/>

        <div>
          Powered by
          <a target="_blank" href="https://www.coindesk.com/price">
            Coindesk

          </a>
        </div>
      </div>
    );
  }
}

export default App;
