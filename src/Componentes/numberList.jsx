
const Listado = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number+1}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default Listado;