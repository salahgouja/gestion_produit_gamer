import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutProduit1Component } from './ajout-produit1/ajout-produit1.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { DetailsComponent } from './details/details.component';
import { ListeproduitComponent } from './listeproduit/listeproduit.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path:"listeproduit",component:ListeproduitComponent},
  {path:"products", component : ProductsComponent},
{path:"produit1",component:AjoutProduit1Component},
{path:"signup",component:SignupComponent},
{path:"login",component:LoginComponent},
{path:"view/:id",component:DetailsComponent},

{path:"update/:id",component:UpdateProduitComponent},

{path:"product/:id",component:DetailproduitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
