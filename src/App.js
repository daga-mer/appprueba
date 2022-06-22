import "./App.css";
import {
  Button,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
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
    this.establecerValor2 = this.establecerValor2.bind(this);
    this.establecerValor1 = this.establecerValor1.bind(this);
    this.agregarValor = this.agregarValor.bind(this);
    this.agregarId = this.agregarId.bind(this);
    this.state = {
      varnumeros: [
        { id: 0, titulo: "Valor1" },
        { id: 1, titulo: "Valor2" },
        { id: 2, titulo: "Valor3" },
      ],
      Numero: 0,
      texto: "",
      Info: "",
      listVal: "",
      listId: 3,
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

  agregarId(event) {
    this.setState({ listId: event.target.value });
  }

  render() {
    return (
      <>
        <div>
          <UncontrolledAccordion defaultOpen="1">
            <AccordionItem>
              <AccordionHeader targetId="1">Suma condicional</AccordionHeader>
              <AccordionBody accordionId="1">
                <h1 style={{ margin: "1%" }}>
                  <Button
                    color="success"
                    onClick={() => {
                      if (this.state.Numero > 0) {
                        this.setState({ Numero: this.state.Numero - 1 });
                        this.setState({ texto: " " });
                      }
                      if (this.state.Numero === 0) {
                        this.setState({ texto: "No puedes reducir mas" });
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
                        this.setState({ texto: "No puedes aumentar mas" });
                      }
                    }}
                  >
                    +
                  </Button>
                </h1>
                <b>{this.state.texto}</b>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Lector texto</AccordionHeader>
              <AccordionBody accordionId="2">
                <label>
                  Ingrese info: {"  "}
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
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                Suma de dos valores
              </AccordionHeader>
              <AccordionBody accordionId="3">
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

                <Button
                  style={{ margin: "1%" }}
                  color="success"
                  onClick={() => {
                    this.setState({
                      result:
                        parseInt(this.state.value1) +
                        parseInt(this.state.value2),
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
                        parseInt(this.state.value1) -
                        parseInt(this.state.value2),
                    });
                  }}
                >
                  - Restar
                </Button>

                <h2>
                  <b>Resultado: </b>
                  {this.state.result}
                </h2>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                Listado en tiempo real
              </AccordionHeader>
              <AccordionBody accordionId="4">
                <label>
                  Agregue ID para el dato de la lista:
                  <input
                    type="number"
                    value={this.state.listId}
                    onChange={this.agregarId}
                  />
                </label>
                <br />
                <br />
                <label>
                  Agregue valor del dato a la lista:
                  <input
                    type="text"
                    min={this.state.listId}
                    value={this.state.listVal}
                    onChange={this.agregarValor}
                  />
                </label>
                <Button
                  style={{ margin: "1%" }}
                  color="success"
                  onClick={() => {
                    var id = this.state.listId;
                    var valor = this.state.listVal;
                    var array = { id: id, titulo: valor };

                    this.state.varnumeros.push(array);
                  }}
                >
                  Agregar a la lista
                </Button>

                <Listado numbers={this.state.varnumeros} />
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>

        <hr />

        <Tablado />
      </>
    );
  }
}

export default App;
