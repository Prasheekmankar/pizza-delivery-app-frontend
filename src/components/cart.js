import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useCart, useDispatchCart } from "../context/Context";

export const CartItem = ({ pizza, index, handleRemove }) => {
  return (
    <nav>
      <List>
      <div className="cart-content-child">
        <ListItem className="hover">
          <img src={pizza.poster} className="bike-poster-cart" alt={pizza.name} />
          <div className="bike-details">
            <h1 style={{margin: "2rem"}}>{pizza.name}</h1>
            <h3 style={{margin: "2rem"}}>{pizza.type}</h3>
            <h3 style={{margin: "2rem"}}>{pizza.mileage}/kmpl</h3>
            <h3 style={{margin: "2rem"}}>{pizza.seater}</h3>
            <h3 style={{margin: "2rem"}}>{pizza.daycost}/day</h3>
            <h3 style={{margin: "2rem"}}>{pizza.weekcost}/week</h3>
          </div>
          <Button
            onClick={() => handleRemove(index)}
            style={{ marginLeft: "auto" }}
          >
            Remove from cart
          </Button>
        </ListItem>
        </div>
      </List>
    </nav>
  );
};

export default function Cart() {
  const history = useHistory();
  const items = useCart();
  console.log(items)
  const dispatch = useDispatchCart();

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if (items.length === 0) {
    return (
      <main>
        <h2>Cart is empty</h2>
      </main>
    );
  }
  return (
    <div>
      <Button
        style={{ marginLeft: "auto" }}
        variant="text"
        color="inherit"
        edge="end"
        onClick={() => history.push("/pizzaList")}
      >
        Go back
      </Button>
      <main>
        {items.map((item, index) => (
          <CartItem
            handleRemove={handleRemove}
            key={index}
            pizza={item}
            index={index}
          />
        ))}
      </main>
    </div>
  );
}
