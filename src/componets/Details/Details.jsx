import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details = ({ getOneProduct, oneProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();
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

  console.log(oneProduct);
  return (
    <div>
      <div className="container d-flex justify-content-between flex-wrap mt-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Details;
