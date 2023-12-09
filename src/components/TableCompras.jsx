import { Button, Table } from "react-bootstrap";

export const TableCompras = ({ listaCompras, eliminarCompra, carritoVacio, aumentarCompra, disminuirCompra }) => {
  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
  };
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carritoVacio && <p>Aun no agregaste productos</p>}
          {listaCompras.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <Button onClick={() => disminuirCompra(item.id)}>-</Button>
                <Button>{item.cantidad}</Button>
                <Button onClick={() => aumentarCompra(item.id)}>+</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => eliminarCompra(item.id)}>
                  🗑️
                </Button>
              </td>
            </tr>
          ))}
          <thead>
            <th>
              <b>Total</b>
            </th>
            <td>${calcularTotal()}</td>
          </thead>
        </tbody>
      </Table>
    </>
  );
};
