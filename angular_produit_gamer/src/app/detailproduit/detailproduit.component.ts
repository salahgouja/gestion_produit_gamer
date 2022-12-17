import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  id!: number
  product !: any
  produitF!: Produit[]
  produit!: Produit[] /*= [
  { id: 1, nom: "pc portable", quantite: 200, prix: 1300, image: "./assets/image/imp.jfif" },
  { id: 2, nom: "imprimante", quantite: 50, prix: 700, image: "./assets/image/pc.jpg" },
  { id: 3, nom: "smartphone", quantite: 150, prix: 3700, image: "./assets/image/phone.jfif" }
]
*/

  constructor(private ar: ActivatedRoute, private route: Router,private service:ProduitService) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    /*console.log(this.id);*/
    /*this.product = this.produit.find(x => x.id == this.id)
    console.log(this.product)
    */
this.service.getProductByid(this.id).subscribe((data)=>{
  this.product=data;
  
})
  }
  back() {
    this.route.navigate(['/listeproduit']);
  }


}
