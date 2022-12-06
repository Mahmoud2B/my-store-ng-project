import { Component } from "@angular/core";
import { CartService } from "./services/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  get cartCounter(): number {
    return this.cartService.totalCount;
  }
  constructor(private cartService: CartService) {}
}
