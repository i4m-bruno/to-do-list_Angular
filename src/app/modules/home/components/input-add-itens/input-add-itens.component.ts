import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.scss'],
})
export class InputAddItensComponent implements OnInit {
  //
  @Output() public emitTaskListItem = new EventEmitter();
  public addItemTaskList: string = '';
  //
  constructor() {}
  ngOnInit(): void {}

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    if (this.addItemTaskList) {
      this.emitTaskListItem.emit(this.addItemTaskList);
      this.addItemTaskList = '';
    }
  }
}
