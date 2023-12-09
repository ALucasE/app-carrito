import { CardCompras } from "../components/CardCompras";
import { Row } from "react-bootstrap";

import { useProductosContext } from "../contexts/ProductosContext";
import { Cargando } from "../components/Cargando";
import { useCarritoContext } from "../contexts/CarritoContext";

const ProductosPage = () => {
  const { data, ok, isLoading } = useProductosContext();
  const { agregarCompra, eliminarCompra } = useCarritoContext();
  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };

  const handleEliminar = (id) => {
    eliminarCompra(id);
  };

  return (
    <>
      <h1>Todos los productos</h1>
      <Row>
        {isLoading && <Cargando />}
        {ok &&
          data.map((item) => (
            <CardCompras
              key={item.id}
              imagen={item.image}
              titulo={item.title}
              descripcion={item.description}
              precio={item.price}
              handleAgregar={() => handleAgregar(item)}
              handleEliminar={() => handleEliminar(data.id)}
            />
          ))}
      </Row>
    </>
  );
};
export default ProductosPage;
