import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeproduitComponent } from './listeproduit/listeproduit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import {HttpClient, HttpClientModule}   from '@angular/common/http';
import { AjoutProduit1Component } from './ajout-produit1/ajout-produit1.component';
import { ProductsComponent } from './products/products.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListeproduitComponent,
    DetailproduitComponent,
    AjoutProduit1Component,
    ProductsComponent,
    UpdateProduitComponent,
    SignupComponent,
    LoginComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
