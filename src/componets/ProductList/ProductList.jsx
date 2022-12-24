import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// рождение ,монтирование ,обновление,смерть жизненные циклы компонентов реакта
const ProductList = ({ getProducts, products, deleteProducts }) => {
  useEffect(() => {
    getProducts();
  }, []); //[]-массив зависимости

  const navigate = useNavigate();
  return (
    <div className="container d-flex justify-content-between flex-wrap mt-5">
      {products.map((item) => {
        return (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
              <Button
                onClick={() => navigate(`/edit/${item.id}`)}
                variant="warning"
              >
                Edit
              </Button>
              <Button
                onClick={() => navigate(`/details/${item.id}`)}
                variant="success"
              >
                Details
              </Button>
              <Button variant="danger" onClick={() => deleteProducts(item.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductList;
