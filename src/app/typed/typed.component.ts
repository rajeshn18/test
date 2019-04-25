import { Component, OnInit } from '@angular/core';
import { DndDropEvent } from "ngx-drag-drop";

@Component({
  selector: 'app-typed',
  templateUrl: './typed.component.html',
  styleUrls: ['./typed.component.css']
})
export class TypedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
}
