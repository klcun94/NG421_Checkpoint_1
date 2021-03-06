import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { BoardComponent } from './board/board/board.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodotableComponent } from './todotable/todotable.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CreateTodoComponent,
    TodoListComponent,
    ConfirmationModalComponent,
    BoardComponent,
    EditModalComponent,
    TodotableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationModalComponent, EditModalComponent],
})
export class AppModule {}
