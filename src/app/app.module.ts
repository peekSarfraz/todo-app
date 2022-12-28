import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TodoAddComponent,
    TodoDetailComponent,
    ListTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
