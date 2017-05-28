import { Routes } from '@angular/router';
import {AuthorizeComponent} from './authorize/authorize.component';
import {RegisterClientComponent} from "app/register-client/register-client.component";
import {RegisterProviderComponent} from "./register-provider/register-provider.component";
import {DeliveryComponent} from "./delivery/delivery.component";
import {PurchaseComponent} from "./purchase/purchase.component";

export const ROUTES: Routes = [
    { path: '',      component: AuthorizeComponent },
    { path: 'authorize',  component: AuthorizeComponent },
    { path: 'register/client',  component: RegisterClientComponent },
    { path: 'register/provider',  component: RegisterProviderComponent },
    { path: 'delivery',  component: DeliveryComponent },
    { path: 'purchase',  component: PurchaseComponent },
    { path: '**',    component: AuthorizeComponent },
];
