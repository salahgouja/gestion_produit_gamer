import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 // @ts-ignore
 productDetails :Produit ;
 productId : any;
 val:any;
  constructor(private sv : ProduitService, private ar :ActivatedRoute) { }

  ngOnInit(): void {
    let sub = this.ar.params.subscribe(params => {
      this.val = params['id'];
    });
    console.log(this.val);
    if (this.val !== '') {
      this.details(this.val);
    }
  }
    details(val:any){
      this.sv.productinfo(val).subscribe(res => {  
        this.productDetails = res;
    });
}}
