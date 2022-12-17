import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// @ts-ignore
formu :FormGroup;

  constructor(private http :HttpClient,private fb:FormBuilder,private router:Router,private service: ProduitService){}

  ngOnInit(): void {
    this.formu = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500)])],
    }); 
   
  }
login(){
 this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.email === this.formu.value.email && a.password === this.formu.value.password
  });
  if (user) {
    this.formu.reset();
    this.router.navigate(['/listeproduit']);
  } else {
    alert("somthing wrong !");
  }
 })
}
}
