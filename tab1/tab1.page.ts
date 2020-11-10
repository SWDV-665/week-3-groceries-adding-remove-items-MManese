import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titlePage = "Groceries";
  titleList = "Grocery List";

  items = [
    "5 Apples",
    "1 Bunch of Bananas",
    "2 loaves of Bread",
    "1 carton Milk"
  ];

  constructor() {}

  removeItem(item, index){
    console.log("Removing Item -", item, index);
    this.items.splice(index,1);
  }
  
  item;
  addItem() {
    console.log('Adding Item ' + this.item);
    this.items.push(this.item);
    this.item = ''
  }

}
