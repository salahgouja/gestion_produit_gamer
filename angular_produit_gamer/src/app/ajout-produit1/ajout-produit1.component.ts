import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-ajout-produit1',
  templateUrl: './ajout-produit1.component.html',
  styleUrls: ['./ajout-produit1.component.css']
})
export class AjoutProduit1Component implements OnInit {

  constructor(private service:ProduitService,private router:Router) { }

  ngOnInit(): void {
  }
  add(f:NgForm){
console.log(f.value);
let p =f.value;

this.service.Addproduct(p).subscribe((data)=>{
  alert("ajout avec succées ");
  this.router.navigate(['/listeproduit']);
}
)

  }

}
