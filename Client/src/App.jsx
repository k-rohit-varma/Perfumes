import CardDescription from "./components/ProductCard/CardDescription";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/components/Home"
import AddNewProduct from "./components/AddNewProduct";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Products />} />
        <Route path="/fullDescription" element={<CardDescription />} />
        <Route path="/addProduct" element={<AddNewProduct/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
