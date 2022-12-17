import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
 
id!:number;
  produit!:Produit;
  formproduct : any
  constructor(private ar: ActivatedRoute , private service : ProduitService, private router: Router , private formbuilder : FormBuilder) {
    
   }

  ngOnInit(): void {
    this.ar.paramMap.subscribe((param:any ) =>{
      
      this.id=param.get('id');
    });

    this.service.getProductByid(this.id).subscribe((data)=>{
      this.produit=data;
    });
 
  }

  onSubmit(){
    this.service.Updateproduct( this.produit,this.produit.id).subscribe(date =>{
      alert('modofié avec succé')
    });
    this.router.navigate(['/listeproduit']);
  }

}