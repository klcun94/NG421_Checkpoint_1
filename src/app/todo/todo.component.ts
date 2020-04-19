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
  async deleteTodo() {
    const modal = this.modalService.open(ConfirmationModalComponent);
    const comp: ConfirmationModalComponent = modal.componentInstance;
    comp.modalInstance = modal;

    const result = await modal.result;

    if (result === 'yes') {
      this.todoService.deleteTodo(this.todo);
    }
  }
}
