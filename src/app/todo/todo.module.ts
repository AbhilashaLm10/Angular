import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [TodoComponent, TodoListComponent]
})
export class TodoModule { }
