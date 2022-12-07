import { Component } from "@angular/core";
import { Router } from "@angular/router";
import Product from "src/app/models/product";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.sass"]
})
export class HomePageComponent {
  products: Product[] = [];
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
  viewProduct(id: number) {
    this.router.navigate(["product/" + id]);
  }
}
