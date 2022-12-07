import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Checkout from "src/app/models/checkout";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.sass"]
})
export class CheckoutComponent {
  checkoutData: Checkout = { address: "", cardNumber: "", email: "", name: "" };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      
      this.checkoutData = {
        address: params["address"],
        cardNumber: params["cardNumber"],
        email: params['email'],
        name: params['name']
      };
    });
  }
}
