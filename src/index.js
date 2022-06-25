import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Listado from "./Componentes/numberList.jsx";
import Tablado from "./Componentes/TablaEditable.jsx";
import {
  Navbar,
  NavbarToggler,
  NavLink,
  NavItem,
  Nav,
  Collapse,
  NavbarText,
} from "reactstrap";
var varnumeros = [
  { id: 0, titulo: "Valor1" },
  { id: 1, titulo: "Valor2" },
  { id: 2, titulo: "Valor3" },
];
ReactDOM.render(
  <div>
    <Router>
      <Navbar color="light" expand="md" light>
        {/* <NavbarBrand>reactstrap</NavbarBrand> */}
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/inicio">inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/listado">listado</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Tablado">Tablado</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <Routes>
        <Route path="/inicio" exact element={<App />}></Route>
        <Route path="/listado" element={<Listado numbers={varnumeros} />} />
        <Route path="/Tablado" element={<Tablado />} />
      </Routes>
    </Router>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
