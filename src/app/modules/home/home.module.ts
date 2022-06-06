import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { HeaderComponent } from './components/header/header.component';
import { DeleteAllButtonComponent } from './components/delete-all-button/delete-all-button.component';
import { InputAddItensComponent } from './components/input-add-itens/input-add-itens.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

//pages
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DeleteAllButtonComponent,
    InputAddItensComponent,
    ToDoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
