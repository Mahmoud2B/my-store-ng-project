import { Component } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { ActivatedRoute } from "@angular/router";
import Product from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.sass"]
})
export class ProductPageComponent {
  product: Product = { id: 0, description: "", name: "", price: 0, url: "" };
  numberOfItems: number[] = [1, 2, 3, 4, 5, 6];
  selectedNumber: number = 1;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.getProductFromURL();
  }
  addToCart(): void {
    this.cartService.addToCart(this.product, this.selectedNumber);
  }
  getProductFromURL() {
    this.route.params.subscribe((params) => {
      this.productService
        .getProducts()
        .subscribe(
          (products) =>
            (this.product = products.filter(
              (product) => product.id == params["id"]
            )[0])
        );
    });
  }
}
