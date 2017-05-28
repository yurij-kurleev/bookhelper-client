import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  public bookControl = new FormControl();
  public editBookControl = new FormControl();
  public providerControl = new FormControl();
  public options = [
    'One',
    'Two',
    'Three'
  ];
  public books = [
    'book1',
    'abook2',
    'dbook3'
  ];
  public deliveryItems = [];
  public rows: number[] = [0];
  public filteredOptions: Observable<string[]>;
  public filteredBooks: Observable<string[]>;
  public title = '';
  public amount = 0;
  public itemToChange = {
    title: '',
    amount: 0
  };

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.providerControl.valueChanges
        .startWith(null)
        .map(val => val ? this.filter(val) : this.options.slice());
    this.filteredBooks = this.bookControl.valueChanges
        .startWith(null)
        .map(val => val ? this.filterBooks(val) : this.books.slice());
  }

  filter(val: string): string[] {
    return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

  filterBooks(val: string): string[] {
    return this.books.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

  public addDeliverItem() {
    this.deliveryItems.push({title: this.title, amount: this.amount});
    this.title = '';
    this.amount = 0;
  }

  public deleteRow(item) {
    let itemIndex = this.deliveryItems.indexOf(item);
    if (itemIndex !== -1) {
      this.deliveryItems.splice(itemIndex, 1);
    }
  }

  public updateRow(item) {
    this.itemToChange = item;
  }

  isPlusActive(): boolean {
    return this.title && this.amount > 0;
  }

  isDoneActive(): boolean {
    return this.deliveryItems.length > 0;
  }
}
