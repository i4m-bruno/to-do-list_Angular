import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../Models/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    { task: 'Primeira tarefa', checked: true },
    { task: 'Segunda tarefa', checked: false },
  ];

  constructor() {}
  ngOnInit(): void {}
}
