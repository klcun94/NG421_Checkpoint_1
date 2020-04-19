import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { ITodo } from '../interfaces/itodo';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;
  title = 'Todos';
  isEditing: false;

  constructor(private todoService: TodoService, private modalService: NgbModal) { }
  ngOnInit() {
  }
  async deleteTodo(todo) {
    let result;
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      if (result === 'yes') {
        this.todoService.deleteTodo(todo);
      }
    } catch (ex) {}
  }
  async editDescription(todo: ITodo) {
    let result;
    const modal = this.modalService.open(EditModalComponent);
    modal.componentInstance.modalInstance = modal;
    modal.componentInstance.todo = todo;

    try {
      result = await modal.result;
      this.todo.description = result;
    } catch (ex) {}
  }
}
