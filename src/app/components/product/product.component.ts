import { Component, EventEmitter, Input, Output } from "@angular/core";
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
  @Output() vieProductEvent = new EventEmitter<number>();

  addToCart(): void {
    this.cartService.addToCart(this.product, this.selectedNumber);
  }
  viewProduct(id: number) {
    this.vieProductEvent.emit(id);
  }
}
