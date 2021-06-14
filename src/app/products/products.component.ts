import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service'; 
import {Product} from '../interfaces/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  products : Product[];

  constructor(private  productsService:ProductsService) { 
  	this.productsService.get().subscribe( (data: Product[]) => {
      this.products = data;
    }, (error) => {
      alert('An error has occurred');
    });
  }

  ngOnInit(): void {
  }

}
