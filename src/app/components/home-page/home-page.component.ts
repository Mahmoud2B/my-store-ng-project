import { Component } from "@angular/core";
import Product from "src/app/models/product";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.sass"]
})
export class HomePageComponent {
  products: Product[] = [];
  constructor(private productService: ProductsService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
