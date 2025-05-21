import React from "react";
import { useSelector } from "react-redux";

const CartCounter = () => {
  const cart = useSelector((state) => state.cart.items);
  // Count total quantity of all products
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <span className="cart_quantity_count">
      {totalCount > 0 ? totalCount : null}
    </span>
  );
};

export default CartCounter;
