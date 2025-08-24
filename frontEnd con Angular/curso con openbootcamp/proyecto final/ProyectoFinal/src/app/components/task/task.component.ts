import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  deleteTask(){
    // Nortificamos al componente superior la tarea a eliminar
    this.delete.emit(this.task);
  }
}
