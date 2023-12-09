import { Button } from "react-bootstrap";
import { TableCompras } from "../components/TableCompras";
import { useCarritoContext } from "../contexts/CarritoContext";

const CarritoCompras = () => {
  const { listaCompras, carritoVacio, eliminarCompra, aumentarCompra, disminuirCompra } = useCarritoContext();
  const handleImpresion = () => {
    print();
  };
  return (
    <>
      <h1>Carrito 🛒</h1>
      {listaCompras && (
        <TableCompras
          listaCompras={listaCompras}
          eliminarCompra={eliminarCompra}
          carritoVacio={carritoVacio}
          aumentarCompra={aumentarCompra}
          disminuirCompra={disminuirCompra}
        />
      )}
      <Button onClick={handleImpresion} disabled={listaCompras < 1}>
        Comprar
      </Button>
    </>
  );
};
export default CarritoCompras;
