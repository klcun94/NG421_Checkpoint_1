import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  title = 'Todos';
  todoList: ITodo[] = [
    { title: 'finish todo app',
    id: 1,
    status: 'Todo',
    createdAt: new Date(),
    description: 'routing'}
  ];
  todoId = 2;
  todoTitle: string;
  description: string;
  statuses: string[] = [
    'Todo',
    'Doing',
    'Done'
  ];

  constructor(private modalService: NgbModal) { }

  getStatuses() {
    return this.statuses;
  }
  getTodos(status?: string): ITodo[] {
    if (!status) {
      return this.todoList;
    }
    return this.todoList.filter(t => t.status === status);
  }
  async deleteTodo(todo: ITodo) {
    const modal = this.modalService.open(ConfirmationModalComponent);
    const component: ConfirmationModalComponent = modal.componentInstance;
    component.modalInstance = modal;

    const result = await modal.result;

    if (result === 'yes') {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
    }
  }
  addTodo(todo: ITodo): void {
    todo.id = this.todoId ++;
    this.todoList.push(todo);
  }
}
