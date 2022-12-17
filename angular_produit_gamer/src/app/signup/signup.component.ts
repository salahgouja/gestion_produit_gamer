import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
// @ts-ignore
regform :FormGroup;
suser : any ;
productId : any ;
constructor(private ar : ActivatedRoute ,private fb:FormBuilder,private router:Router,private service : ProduitService) { }

  ngOnInit(): void {
  
    this.regform = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500)])],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(500)])],

    }); 
  }
Submit(){
 this.service.signup(this.regform.value).subscribe(res=>{
  alert("Added succesfully !");
  this.regform.reset();
  this.router.navigate(['/login']);

 },err =>{
  alert("ERROR !")
 }
 )}
}
