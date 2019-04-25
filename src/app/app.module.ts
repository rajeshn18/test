import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import { DndModule } from 'ngx-drag-drop';
import { TypedComponent } from './typed/typed.component';
import { MatListModule } from "@angular/material/list";
import { DragComponent } from './drag/drag.component';

@NgModule({
  declarations: [
    AppComponent,
    TypedComponent,
    DragComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    DndModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
