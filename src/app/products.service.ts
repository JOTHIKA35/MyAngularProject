import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private client:HttpClient) { }

  carlist(){
    return this.client.get("http://localhost:3000/carbrands");
 }
 
 homeimage(){
  return this.client.get("http://localhost:3000/homeimage");
}

cardetails(){
  return this.client.get("http://localhost:3000/cardetails");
}
brands(){
  return this.client.get("http://localhost:3000/brands");
}
}
