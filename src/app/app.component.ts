import { Component } from '@angular/core';

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
  template: `
  <h1>{{title}}</h1>
      <label>Add Item: </label>
      <input #itembox [(ngModel)]="newitem" 
      (keyup.enter) ="addItem(itembox.value)" placeholder="New Item Name"> 
      <button (click) ="addItem(itembox.value)"> Add </button>
  <ul id="mylist" class="ulclass">

    <li *ngFor='let yoodli of listitems'
    [class.selected] = "yoodli.isSelected===true"
    (click) =  "isClicked(yoodli)"  > 

      <span class="badge">{{yoodli.id}}</span> {{yoodli.name}}
    </li>
  </ul>
`,
 styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: green;
    }
    .ulclass {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .green{
      color: green;
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .red{
      color: red;
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .ulclass li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .ulclass li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .ulclass li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .text {
      position: relative;
      top: -3px;
    }
    .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = 'Shopping List';
  listitems = list;
  itemcount = this.listitems.length
  selectedItem: item;

  addItem(itemname: string) {
    this.itemcount++;
    var myitem={ id: this.itemcount, name: itemname, isSelected: false}
    this.listitems.push(myitem)
  }

  isClicked(yoodli: item) {
    if (yoodli.isSelected===true) {
      yoodli.isSelected=false;
    }
    else {
      yoodli.isSelected=true;
    }
  } 
}