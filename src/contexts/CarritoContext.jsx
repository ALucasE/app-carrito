import { createContext, useContext, useReducer, useState } from "react";

//CREA EL CONTEXTO
export const CarritoContext = createContext();

//FUNCIÓN PARA USAR EL CONTEXTO
export const useCarritoContext = () => {
  const context = useContext(CarritoContext);
  if (!context) throw new Error("Error en el contexto del Carrito");
  return context;
};

//FUNCIONALIDADES DEL CONTEXTO
const initialState = [];
export const CarritoProvider = ({ children }) => {
  const [carritoVacio, setCarritoVacio] = useState(true);
  //REDUCER
  const comprasReducer = (state = initialState, action = {}) => {
    if (action.type === "[CARRITO] AGREGAR") {
      return [...state, action.payload];
    }

    if (action.type === "[CARRITO] AUMENTAR") {
      return state.map((item) => {
        const cant = item.cantidad + 1;
        if (item.id === action.payload) return { ...item, cantidad: cant };
        return item;
      });
    }

    if (action.type === "[CARRITO] DISMINUIR") {
      return state.map((item) => {
        const cant = item.cantidad + 1;
        if (item.id === action.payload) return { ...item, cantidad: cant };
        return item;
      });
    }

    if (action.type === "[CARRITO] ELIMINAR") {
      return state.filter((compra) => compra.id !== action.payload);
    }
  };

  //REDUCER (listaCompras)
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  //DISPATCH PARA AGREGAR COMPRA
  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    setCarritoVacio(false);
    const action = {
      type: "[CARRITO] AGREGAR",
      payload: compra,
    };
    dispatch(action);
  };
  //DISPATCH PARA AUMENTAR +1 UN PRODUCTO
  const aumentarCompra = (id) => {
    const action = {
      type: "[CARRITO] AUMENTAR",
      payload: id,
    };
    dispatch(action);
  };
  //DISPATCH PARA DISMINUIR -1 UN PRODUCTO
  const disminuirCompra = (id) => {
    const action = {
      type: "[CARRITO] DISMINUIR",
      payload: id,
    };
    dispatch(action);
  };
  //DISPATCH PARA ELIMINAR COMPRA
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] ELIMINAR",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider value={{ listaCompras, carritoVacio, agregarCompra, aumentarCompra, disminuirCompra, eliminarCompra }}>
      {children}
    </CarritoContext.Provider>
  );
};
