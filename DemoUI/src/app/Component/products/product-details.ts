import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  standalone: true,
  template: `
    <p>Product ID: {{ productId }}</p>
  `
})

export class ProductDetails {
  productId!: string | null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });
  }
}