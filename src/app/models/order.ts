import CartItem from "./cart-item";

type Order = {
  cartItems: CartItem[];
  information: {
    fullName: string;
    address: string;
    cardNumber: number;
  };
};
export default Order;
