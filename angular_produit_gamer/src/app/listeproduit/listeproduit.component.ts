import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.css']
})
export class ListeproduitComponent implements OnInit {
  va='masquer';
  v:any;
  nom:any;
  produitF!:Produit[]
  produit !:Produit[] /* =[{id:1,nom:"pc portable",quantite:30,prix:1300,image:"./assets/image/imp.jfif"},
                        {id:2,nom:"imprimante",quantite:0,prix:700,image:"./assets/image/pc.jpg"},
                        {id:3,nom:"smartphone",quantite:10,prix:3700,image:"./assets/image/phone.jfif"}]
                        */

  constructor(private service:ProduitService , private route: Router) { }

  ngOnInit(): void {
    /*this.produitF=this.produit*/
    this.getAllProduit();
  }
  afficher()
  {
    if(this.va=="masquer"){
      this.va="afficher"
    }
    else{
      this.va="masquer"
    }
  }
  /*
  set vfilte(a:string){
    this.produitF=filtre(a)

  }
  filter(b:string){
    return this.produitF.filter((x:Produit)=>x.nom.indexOf(b)!=
  }
*/
getcolor(v:any){
  if(v==0){
    return "red";
  }
  else{
return "green";
  }


}
getAllProduit(){
this.service.getProduct().subscribe((data)=>{
  this.produit=data;
  this.produitF=this.produit;
})
}
supprimer(id:number){
  this.service.remove(id).subscribe((data)=>{
    this.getAllProduit();
  })

}

update(id:number){
 this.route.navigate(['/update',id])
}
search(){
  if(this.nom == ""){
    this.ngOnInit();

  }else{
    this.produit = this.produit.filter(res =>{
      return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
    });
  }
}
view(id:number){
  this.route.navigate(['/view',id])
 }
}
