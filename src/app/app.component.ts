import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: {id: number; name: string; count: number; price: number; sum: number}[] = [
    {id: 1, name: 'TovarName1', count: 1, price: 10, sum: 10},
    {id: 2, name: 'TovarName1', count: 0, price: 10, sum: 0},
    {id: 3, name: 'myTovar3', count: 1, price: 15, sum: 15},
    {id: 4, name: 'NewTovar5', count: 0, price: 15, sum: 0},
  ];

  addProduct(id: number): void {
    this.products.map((product) => {
      if (product.id === id) {
        product.count++;
        product.sum += product.price;
      }
    })
  }

  delProduct(id: number): void {
    this.products.map((product) => {
      if (product.id === id) {
        if (product.count === 0) {
          return;
        }
        product.count--;
        product.sum -= product.price;
      }
    })
  }
}
