import { Injectable } from "@angular/core";
import CartItem from "../models/cart-item";
import { Subject } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import Product from "../models/product";

@Injectable({
  providedIn: "root"
})
export class CartService {
  cartItems: CartItem[] = [];
  totalCount: number = 0;
  totalCountChange: Subject<number> = new Subject<number>();

  constructor(private snackBar: MatSnackBar) {
    this.totalCountChange.subscribe((val) => {
      this.totalCount = val;
    });
  }

  addToCart(product: Product, numberOfItems: number): void {
    this.cartItems.push({ product, numberOfItems });
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
}
