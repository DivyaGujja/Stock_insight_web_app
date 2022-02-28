import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders-search',
  templateUrl: './orders-search.component.html',
  styleUrls: ['./orders-search.component.css']
})
export class OrdersSearchComponent implements OnInit {

  searchTypeList: any = ['Purchase Order #', 'Sales Order #', 'Invoice #', 'Account # (Ship to)', 'Bill To ID', 'Bill To ID SKU #']

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    ordersSearch: new FormControl('', Validators.required),
    searchInput: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    this.form.reset();
  }

}
