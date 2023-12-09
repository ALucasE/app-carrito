import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductosPage from "./pages/ProductosPage";
import CarritoCompras from "./pages/CarritoCompras";
import { Container } from "react-bootstrap";
import { ProductosProvider } from "./contexts/ProductosContext";
import { CarritoProvider } from "./contexts/CarritoContext";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ProductosProvider>
          <CarritoProvider>
            <NavBar />
            <Container fluid="md">
              <Routes>
                <Route path="/" element={<ProductosPage />} />
                <Route path="/shop" element={<CarritoCompras />} />
              </Routes>
            </Container>
            <Footer />
          </CarritoProvider>
        </ProductosProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
