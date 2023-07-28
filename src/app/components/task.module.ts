import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [TaskComponent, NewTaskComponent],
  exports: [TaskComponent, NewTaskComponent],
})
export class TaskModule {}
