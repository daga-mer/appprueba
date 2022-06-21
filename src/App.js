import "./App.css";
import { Button } from "reactstrap";
import { Component } from "react";
import Listado from "./Componentes/numberList.jsx";
import Tablado from "./Componentes/TablaEditable.jsx";
/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; */

class App extends Component {
  constructor(props) {
    super(props);
    this.cambiarInfo = this.cambiarInfo.bind(this);
    this.establecerValor1 = this.establecerValor1.bind(this);
    this.establecerValor2 = this.establecerValor2.bind(this);
    this.agregarValor = this.agregarValor.bind(this);
    this.state = {
      varnumeros: [1, 2, 3, 4, 5],
      Numero: 0,
      texto: "",
      Info: "",
      listVal: 0,
      value1: 0,
      value2: 0,
      result: 0,
    };
  }

  cambiarInfo(event) {
    this.setState({ Info: event.target.value });
  }

  establecerValor1(event) {
    this.setState({ value1: event.target.value });
  }

  establecerValor2(event) {
    this.setState({ value2: event.target.value });
  }

  agregarValor(event) {
    this.setState({ listVal: event.target.value });
  }

  render() {
    return (
      <>
        <div>
          <h1 style={{ margin: "1%" }}>
            <Button
              color="success"
              onClick={() => {
                if (this.state.Numero > 0) {
                  this.setState({ Numero: this.state.Numero - 1 });
                  this.setState({ texto: " " });
                }
                if (this.state.Numero === 0) {
                  this.setState({ texto: "no puedes reducir mas" });
                }
              }}
            >
              -
            </Button>
            {this.state.Numero}
            <Button
              color="success"
              onClick={() => {
                if (this.state.Numero < 10) {
                  this.setState({ Numero: this.state.Numero + 1 });
                  this.setState({ texto: " " });
                }
                if (this.state.Numero === 10) {
                  this.setState({ texto: "no puedes aumentar mas" });
                }
              }}
            >
              +
            </Button>
          </h1>
          <b>{this.state.texto}</b>
        </div>

        <div>
          <label>
            Ingrese info:
            <input
              type="text"
              value={this.state.Info}
              onChange={this.cambiarInfo}
            />
          </label>
          <p>
            <b>Su texto: </b>
            {this.state.Info}
          </p>
        </div>

        <div>
          <label>
            Ingrese su primer valor:
            <input
              type="number"
              value={this.state.value1}
              onChange={this.establecerValor1}
            />
          </label>
          <br />
          <br />

          <label>
            Ingrese su segundo valor:
            <input
              type="number"
              value={this.state.value2}
              onChange={this.establecerValor2}
            />
          </label>
        </div>

        <div>
          <Button
            style={{ margin: "1%" }}
            color="success"
            onClick={() => {
              this.setState({
                result:
                  parseInt(this.state.value1) + parseInt(this.state.value2),
              });
            }}
          >
            + Sumar
          </Button>
          <Button
            style={{ margin: "1%" }}
            color="danger"
            onClick={() => {
              this.setState({
                result:
                  parseInt(this.state.value1) - parseInt(this.state.value2),
              });
            }}
          >
            - Restar
          </Button>

          <h2>
            <b>Resultado: </b>
            {this.state.result}
          </h2>
        </div>

        <div>
          <label>
            Agregue datos a la lista:
            <input
              type="number"
              value={this.state.listVal}
              onChange={this.agregarValor}
            />
          </label>
          <Button
            style={{ margin: "1%" }}
            color="success"
            onClick={() => {
              this.state.varnumeros.push(this.state.listVal);
            }}
          >
            Agregar a la lista
          </Button>

          <Listado numbers={this.state.varnumeros} />
        </div>

        <hr />

        <Tablado />
      </>
    );
  }
}

export default App;
