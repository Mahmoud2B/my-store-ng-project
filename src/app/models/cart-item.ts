import Product from "./product";

type CartItem = {
  id: number;
  product: Product;
  numberOfItems: number;
};
export default CartItem;
