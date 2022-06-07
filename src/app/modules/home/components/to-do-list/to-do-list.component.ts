import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../Models/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements DoCheck {
  //
  public taskList: Array<TaskList> = [
    { task: 'Primeira tarefa', checked: true },
    { task: 'Segunda tarefa', checked: false },
  ];

  constructor() {}
  //
  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    let confirm: boolean = window.confirm(
      'Deseja realmente deletar todos os itens?'
    );
    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      let confirm = window.confirm('Campo vazio, deseja deletar?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
