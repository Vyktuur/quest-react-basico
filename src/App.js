import React from "react";
import './App.css';
import Button from './components/button/button';
import Paragrafo from './components/paragrafo/paragrafo';
import AlertButton from "./components/buttonalert/buttonalert";

class App extends React.Component {
  state = {
    textColor: 'white',
    uppercase: false,
  };

  Cor = (color) => {
    this.setState({ textColor: color });
  };

  Maiusculas = () => {
    this.setState((prevState) => ({
      uppercase: !prevState.uppercase
    }));
  };

  Reset = () => {
    this.setState({
      textColor: this.state.originalColor,
      uppercase: false
    });
  };

  render() {
    return (
      <div className="App-header">
        <h1>Quest - React Básico</h1>
        <p className="desafio">Desafio 1</p>
        <Paragrafo color={this.state.textColor} uppercase={this.state.uppercase} />
        <br />
        <Button
          TrocarCor={this.Cor}
          Uppercase={this.Maiusculas}
          Resetar={this.Reset}
        />
        <hr />
        <p className="desafio">Desafio 2</p>
        <br />
        <AlertButton className="alert" label="Alerta de Label" />
      </div>
    );
  }
}

export default App;
