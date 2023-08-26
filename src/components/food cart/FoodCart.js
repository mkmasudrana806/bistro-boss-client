import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { AuthContext } from "../../auth/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCart = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const { name, price, image, recipe } = item;
  const from = location.pathname;

  const handleOrderItem = (item) => {
    if (!user) {
      return navigate("/login", { state: from });
    }
    if (user) {
      const orderedItem = {
        orderedItemId: item._id,
        image,
        price,
        name,
        recipe,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderedItem),
      })
        .then((res) => res.json())
        .then((data) => refetch());
    }
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{recipe}</Card.Text>
          <Button onClick={() => handleOrderItem(item)} variant="primary">
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCart;
