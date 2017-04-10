import { Component, Input } from '@angular/core';
import { item } from './item';

@Component ({
    selector: 'edit',
    template:`
    <div *ngIf="selectedItem">
      <h3> Edit {{selectedItem.name}} </h3>
      <div>
        <label>Item Name: </label>
        <input [(ngModel)]="selectedItem.name" placeholder="item"/> <button (click) = "!editItem(item)"> Confirm </button>
      </div> 
    </div>
`
})
export class EditComponent{
   
@Input() item: item;
  selectedItem: item;
  
editItem(item: item) {
   this.selectedItem = item;
}
}