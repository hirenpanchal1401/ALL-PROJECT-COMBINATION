import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product.model';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  constructor() { }

  product;
  pricea;
  quantity;

  productdata:Product[] = [];

  adddata(pname,price,qty)
  {
    var  v = new Product(pname,price,qty);
    this.productdata.push(v);
    this.product='';
    this.pricea='';
    this.quantity='';
    return this.productdata;
  }

  ngOnInit() {
  }

}
