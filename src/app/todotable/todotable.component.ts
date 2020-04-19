import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.css']
})
export class TodotableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'status', 'description', 'createdAt'];
  dataSource: MatTableDataSource<ITodo>;

  get todoList(): ITodo[] {
    return this.todoService.getTodos();
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.todoService.getTodos());

    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
