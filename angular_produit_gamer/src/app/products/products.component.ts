import { Component, OnInit } from '@angular/core';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  nom:any;
  produitF!:Produit[]
  produit !:Produit[] 
  constructor( private service:ProduitService) { }
  

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.service.getProduct().subscribe((data)=>{
      this.products=data;
      
    })
  }
  search(){
    if(this.nom == ""){
      this.ngOnInit();
  
    }else{
      this.produit = this.produit.filter(res =>{
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      })
      
      
      
      
      ;
    }
  }
}
