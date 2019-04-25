import { Component } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

export interface PeriodicElement {
  
  position: number;
  name: string;
 // weight: number;
 // symbol: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDrag : any = false;
  public predata: PeriodicElement[] = [
    // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 1, name: 'Hydrogen'},
    {position: 2, name: 'Helium'},
    {position: 3, name: 'Lithium'},
    {position: 4, name: 'Beryllium'},
    
  ];
  title = 'tabledragapp';
  displayedColumns: string[] = ['position', 'name']; //'weight', 'symbol'
  dataSource = this.predata;
  
  public fruits:string[] = [
    "apple",
    "apple",
    "banana",
    "apple",
    "banana",
    "banana",
    "apple",
    "banana",
    "apple",
  ];

  public apples:string[] = [
    "apple",
    "apple"
  ];

  public bananas:string[] = [
    "banana",
    "banana"
  ];

  onDragged( item:any, list:any[] ) {

    const index = list.indexOf( item );
    list.splice( index, 1 );
  }

  onDrop( event:DndDropEvent, list:any[] ) {

    let index = event.index;

    if( typeof index === "undefined" ) {

      index = list.length;
    }

    list.splice( index, 0, event.data );
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    this.isDrag = true;
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

}

