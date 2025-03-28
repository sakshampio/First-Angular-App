import { Component, Input, Output, output, inject } from '@angular/core';
import {type Task} from './task.model'
import { DatePipe } from '@angular/common';
import { CardsComponent } from "../../shared/cards/cards.component";
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardsComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
@Input({required:true}) task!: Task;
private tasksService = inject(TasksService);
onCompleteTask(){
this.tasksService.removeTask(this.task.id)
}

}
