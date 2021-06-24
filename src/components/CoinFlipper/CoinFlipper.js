import React, { Component, useState } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {

  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      totalThrow: 0,
      totalTura: 0,
      totalYazi: 0
    };
  
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    const newSide=(Math.floor(Math.random() * (1 - 0 + 1)) + 0) === 0 ? "tura" : "yazi";

    this.setState({
      side: newSide,
      totalThrow: this.state.totalThrow + 1,
      totalYazi: newSide === "yazi" ? this.state.totalYazi + 1 : this.state.totalYazi,
      totalTura: newSide === "tura" ? this.state.totalTura + 1 : this.state.totalTura
    })    
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.totalThrow} </strong>
          atıştan
          <strong> {this.state.totalTura}  </strong>ü tura
          <strong> {this.state.totalYazi}  </strong>
          si yazı geldi.
        </p>
      </div>
    );

  }
}

export default CoinFlipper;
