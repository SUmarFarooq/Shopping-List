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
  item: any;
  title = 'Shopping List';
  // list: item[];
  listitems = list;
  itemcount = this.listitems.length
  editedItem: item;
  deletedItem: item;

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
   this.editedItem = item;
}
deleteItem(item:item) {
  //   var index = $scope.listitems.indexOf(item);
  // $scope.listitems.splice(index, 1);
  this.deletedItem = item; 
  this.listitems = list;
  this.listitems.slice(this.item.id,this.item.id+1);
  this.listitems;
}
  } 