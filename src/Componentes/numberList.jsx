
const Listado = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li id={number.id} key={number.id}>{number.titulo}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default Listado;