import { createContext, useContext, useEffect, useState } from "react";
import { URL_PRODUCTS } from "../helpers/constantes";

//CREA EL CONTEXTO
export const ProductosContext = createContext();

//FUNCIÓN PARA USAR EL CONTEXTO
export const useProductosContext = () => {
  const context = useContext(ProductosContext);
  if (!context) throw new Error("Error en el contexto de Productos");
  return context;
};

//FUNCIONALIDADES DEL CONTEXTO
export const ProductosProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [ok, setOk] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL_PRODUCTS);
      const data = await response.json();
      setData(data);
      setOk(true);
      setIsLoading(false);
    } catch (error) {
      setData(null);
      setOk(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!URL_PRODUCTS) return;
    getData();
  }, [URL_PRODUCTS]);
  return <ProductosContext.Provider value={{ data, ok, isLoading }}>{children}</ProductosContext.Provider>;
};
