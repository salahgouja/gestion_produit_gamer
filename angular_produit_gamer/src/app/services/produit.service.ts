import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Produit } from '../modele/produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
urlp="http://localhost:3000/produits/"
urls="http://localhost:3000/signup"
  constructor(private http:HttpClient) 
  { }
  public getProduct():Observable <Produit[]>
  {
  return this.http.get<Produit[]>(this.urlp );
}
getProductByid(id:number):Observable <Produit>{
return this.http.get<Produit>(this.urlp +id);

}
remove(id:number):Observable<void>{
return this.http.delete<void>(this.urlp +id);
}
Addproduct(p:any):Observable<void>{
  return this.http.post<void>(this.urlp,p);

}
Updateproduct(p:any,id:number):Observable<void>{
  return this.http.put<void>(this.urlp+id,p);

}
signup(d:any):Observable<void>{
  return this.http.post<void>(this.urls,d);

}
productinfo(id:number):Observable <Produit>{
  return this.http.get<Produit>(this.urlp +id);
}
loginn(a:any):Observable <any>
{
  return  this.http.get<any>(this.urls);
}
}
