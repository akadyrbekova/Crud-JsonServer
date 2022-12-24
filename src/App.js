import React, { useState } from "react";
import AddForm from "./componets/AddForm/AddForm";
import ProductList from "./componets/ProductList/ProductList";
import Header from "./componets/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import EditForm from "./componets/EditForm/EditForm";
import Details from "./componets/Details/Details";

const App = () => {
  let API = "http://localhost:8000/products";

  const [products, setProducts] = useState([]);

  const [oneProduct, setOneProduct] = useState(null);

  // !create (add)
  function addProduct(newProduct) {
    axios.post(API, newProduct);
  }

  //!read(get request)
  async function getProducts() {
    const result = await axios.get(API);
    setProducts(result.data);
  }
  //!delete
  async function deleteProducts(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  // !get one product for edit
  async function getOneProduct(id) {
    let result = await axios.get(`${API}/${id}`);
    setOneProduct(result.data);
  }
  // ! update
  async function updateProduct(id, editProduct) {
    await axios.patch(`${API}/${id}`, editProduct);
    // getProducts();
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                deleteProducts={deleteProducts}
                getProducts={getProducts}
                products={products}
              />
            }
          />
          <Route path="/add" element={<AddForm addProduct={addProduct} />} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
          <Route
            path="/edit/:id"
            element={
              <EditForm
                updateProduct={updateProduct}
                oneProduct={oneProduct}
                getOneProduct={getOneProduct}
              />
            }
          />
          <Route
            path="/details/:id"
            element={
              <Details getOneProduct={getOneProduct} oneProduct={oneProduct} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
