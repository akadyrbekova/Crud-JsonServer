import React, { useState } from "react";

const AddForm = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleValues() {
    const newProduct = {
      title,
      price,
      image,
    };
    addProduct(newProduct);
    setTitle("");
    setPrice("");
    setImage("");
  }

  return (
    <div className="container d-flex flex-column w-50 mt-5 ">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="title"
        value={title}
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="price"
        value={price}
      />
      <input
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="image"
        value={image}
      />
      <button onClick={handleValues} className="btn btn-success">
        add product
      </button>
    </div>
  );
};

export default AddForm;
