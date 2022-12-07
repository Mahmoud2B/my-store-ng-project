import { Injectable } from "@angular/core";
import CartItem from "../models/cart-item";
import { Subject } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import Product from "../models/product";
import Checkout from "../models/checkout";

const CART_ITEMS = "cart_items";
@Injectable({
  providedIn: "root"
})
export class CartService {
  cartItems: CartItem[] = [];
  checkoutData: Checkout = {
    address: "",
    cardNumber: "",
    email: "",
    name: ""
  };
  totalCount: number = 0;
  totalCountChange: Subject<number> = new Subject<number>();

  constructor(private snackBar: MatSnackBar) {
    this.getCartFromLocalStorage();
    this.totalCountChange.subscribe((val) => {
      this.totalCount = val;
    });
  }

  saveCartToLocalStorage(): void {
    localStorage.setItem(CART_ITEMS, JSON.stringify(this.cartItems));
  }

  getCartFromLocalStorage(): void {
    let cartString: string = localStorage.getItem(CART_ITEMS) ?? "[]";
    this.cartItems = JSON.parse(cartString);
    this.totalCountChange.next(this.getCartCounter());
  }

  addToCart(product: Product, numberOfItems: number): void {
    this.cartItems.push({
      id: this.cartItems.length + 1,
      product,
      numberOfItems
    });
    this.saveCartToLocalStorage();
    this.totalCountChange.next(this.getCartCounter());
    this.snackBar.open(`Added ${numberOfItems} item(s) to cart!`, "Great!");
  }

  getCartCounter(): number {
    let totalNumber: number = 0;
    this.cartItems.forEach((item) => {
      totalNumber += item.numberOfItems;
    });
    return totalNumber;
  }
  removeFromCart(id: number): CartItem[] {
    this.cartItems = this.cartItems.filter((item) => item.id != id);
    this.totalCountChange.next(this.getCartCounter());
    this.saveCartToLocalStorage();
    return this.cartItems;
  }
  clearCart() {
    this.cartItems = [];
    localStorage.removeItem(CART_ITEMS);
    this.totalCountChange.next(0);
  }
}
