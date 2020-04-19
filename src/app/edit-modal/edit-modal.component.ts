import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  modalInstance: NgbModalRef;
  todo: ITodo;
  editedDescription: string;
  constructor() { }

  ngOnInit() {
  }
  yes() {
    this.modalInstance.close(this.editedDescription);
  }
  cancel(){
    this.modalInstance.close(this.todo.description);
  }
}
