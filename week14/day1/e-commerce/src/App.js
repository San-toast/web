import "./App.css";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import WithNav from "./components/Navbar/WithNav";
import ProductContainer from "./components/Products/ProductContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route element={<WithNav />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
