import { Component, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import Product from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.sass"]
})
export class ProductComponent {
  constructor(private cartService: CartService) {}

  numberOfItems: number[] = [1, 2, 3, 4, 5, 6];
  selectedNumber: number = 1;
  @Input() product: Product = {
    id: 0,
    name: "",
    description: "",
    price: 12,
    url: ""
  };
  addToCart(): void {
    this.cartService.addToCart(this.product, this.selectedNumber);
  }
}
