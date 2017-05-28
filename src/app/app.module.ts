import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdRadioModule} from '@angular/material';
import { RegisterClientComponent } from './register-client/register-client.component';
import { RegisterProviderComponent } from './register-provider/register-provider.component';
import { DeliveryComponent } from './delivery/delivery.component';
import {CommonModule} from '@angular/common';
import { PurchaseComponent } from './purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizeComponent,
    RegisterClientComponent,
    RegisterProviderComponent,
    DeliveryComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    CommonModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
