import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FormatearTexto } from "./FormatearTexto";
import { ImagenCuadrada } from "./ImagenCuadrada";
export const CardCompras = ({ imagen, titulo, descripcion, precio, handleAgregar, handleEliminar }) => {
  const [add, setAdd] = useState(false);
  const agregar = () => {
    handleAgregar();
    setAdd(true);
  };
  const quitar = () => {
    handleEliminar();
    setAdd(false);
  };
  return (
    <>
      <Card className="m-1" bg="secondary" style={{ width: "18rem" }}>
        <ImagenCuadrada src={imagen} alt={titulo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        {/* <div style={{ width: "250px", height: "250px", overflow: "hidden" }}>
          <Card.Img variant="top" src={imagen} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div> */}
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          {/* <Card.Text>Descripción: {descripcion}</Card.Text> */}
          <Card.Text>
            Descripción: <FormatearTexto content={descripcion} limit={150} />
          </Card.Text>
          <Card.Text>Precio: {precio}</Card.Text>
          {add ? (
            <Button variant="danger" onClick={quitar}>
              Quitar
            </Button>
          ) : (
            <Button variant="success" onClick={agregar}>
              Agregar al carrito
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

// style={{ maxHeight: "180" }}
