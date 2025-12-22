import { Routes } from "@angular/router";
import { Products } from "./products";
import { ProductDetails } from "./product-details";

export const PRODUCT_ROUTES: Routes = [
    {
        path: '',
        component: Products,
        children: [
            {
                path: ':id',
                component: ProductDetails
            }
        ]
    }
]