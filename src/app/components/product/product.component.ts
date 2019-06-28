import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[];
  is_loading = false;
  filteredProducts = [];
  private _listFilter: string;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.is_loading = true;
    this.productService.getProducts().subscribe(data => {
      this.products = data,
        this.performFilter(this.listFilter);
    }, () => {
      this.is_loading = false
    }, () => {
      this.is_loading = false
    })
  }


  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.performFilter(this.listFilter);
  }

  performFilter(filterBy?: string): void {
    if (filterBy) {
      this.filteredProducts = this.products.filter((product: any) =>
        product.name.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
    } else {
      this.filteredProducts = this.products;
    }
  }
}