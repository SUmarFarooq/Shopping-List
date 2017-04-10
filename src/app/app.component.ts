import { Component } from '@angular/core';
// import { item } from './item';
// import { EditComponent } from './edit.component'
// import {listservice} from './list.service'

const list: item[] = [
  { id: 1, name: "Kopi Luwak", isSelected: false},
  { id: 2, name: "Jamaican Blue Mountain", isSelected: false},
  { id: 3, name: "Black Ivory", isSelected: false},
  { id: 4, name: "Molokai", isSelected: false}
];

export class item {
  id: number;
  name: string;
  isSelected: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [listservice]
})

export class AppComponent {
  title = 'Shopping List';
  // list: item[];
  listitems = list;
  itemcount = this.listitems.length
  selectedItem: item;
  confirmedItem: item;

  addItem(itemname: string) {
    this.itemcount++;
    var myitem={ id: this.itemcount, name: itemname, isSelected: false}
    this.listitems.push(myitem)
  }

  isClicked(item: item) {
    if (item.isSelected===true) {
      item.isSelected=false;
    }
    else {
      item.isSelected=true;
    }
  }

// constructor(private listservice: listservice) {} 
//     getlist(): void {
//       this.list=this.listservice.getlist();
// }
editItem(item: item) {
   this.selectedItem = item;

deleteItem(item, list) ;{
  this.selectedItem = item;
  this.listitems = list;
  this.listitems=this.listitems.slice(this.selectedItem.id+1,this.selectedItem.id+2)
}
}
  } 