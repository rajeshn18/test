import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypedComponent } from './typed/typed.component';
import { DragComponent } from './drag/drag.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'typed',
    component: TypedComponent
  },
  {
    path: 'drag',
    component: DragComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
