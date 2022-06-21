import { Component } from "react";
import { Table } from "reactstrap";

class Tablado extends Component {
  /*   constructor(props){

    } */
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Nombre de usuario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">{this.id}</th>
                        <td>{this.name}</td>
                        <td>{this.lastName}</td>
                        <td>{this.arroba}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Tablado;