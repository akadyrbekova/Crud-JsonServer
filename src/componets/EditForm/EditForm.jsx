import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = ({ oneProduct, getOneProduct, updateProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const params = useParams();
  // console.log(params);

  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  function handleValues() {
    const editedProduct = {
      title,
      price,
      image,
    };
    updateProduct(params.id, editedProduct);
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
      <button
        onClick={() => {
          handleValues();
          navigate("/");
        }}
        className="btn btn-success"
      >
        Save change
      </button>
    </div>
  );
};

export default EditForm;
