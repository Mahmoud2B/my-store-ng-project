import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import CartItem from "src/app/models/cart-item";
import Checkout from "src/app/models/checkout";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.sass"]
})
export class CartComponent {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    if (this.cartService.cartItems.length > 0) {
      this.cartItems = this.cartService.cartItems;
      this.calculateTotal();
    }
  }
  submitForm(f: NgForm) {
    if (f.valid) {
      this.cartService.clearCart();
      this.router.navigate(["checkout"], {
        queryParams: {
          name: f.value["fullName"],
          email: f.value["email"],
          address: f.value["address"],
          cardNumber: f.value["cardNumber"]
        }
      });
    }
  }
  removeFromCart(id: number) {
    this.cartItems = this.cartService.removeFromCart(id);
    this.calculateTotal();
  }
  calculateTotal() {
    this.total = 0;
    this.cartItems.forEach((item) => {
      this.total += item.numberOfItems * item.product.price;
    });
  }
  calculateItemPrice(item: CartItem): number {
    return item.numberOfItems * item.product.price;
  }
}
