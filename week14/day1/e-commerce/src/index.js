import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import ProductContainer from "./components/Products/ProductContainer";
import Error from "./components/Error/Error";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger));
let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<ProductContainer />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
