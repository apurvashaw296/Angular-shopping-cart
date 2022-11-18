import { Injectable } from '@angular/core';
import productlist from './productlist.json';


@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor() { }

  getProducts(){
    return productlist
  }
}
