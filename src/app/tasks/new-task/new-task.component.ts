import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Output() cancle = new EventEmitter<void>();// void is a special that esential mean that there will be no data emitted 
onCancle(){
this.cancle.emit();
}
}
