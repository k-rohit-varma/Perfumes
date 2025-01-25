import CardDescription from "./components/ProductCard/CardDescription";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/components/Home"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the products page */}
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Products />} />
        {/* Route for the full description page */}
        <Route path="/fullDescription" element={<CardDescription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
