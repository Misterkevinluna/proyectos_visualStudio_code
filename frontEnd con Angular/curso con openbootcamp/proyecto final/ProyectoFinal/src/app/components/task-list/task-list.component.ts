import { Component } from '@angular/core';
import { ITask, Levels } from '../../models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  // TODO: reformular como una lista de tareas
  task1: ITask = {
    title: 'Task 1',
    description: 'Description 1',
    completed: false,
    level: Levels.info
  };

  task2: ITask = {
    title: 'Task 2',
    description: 'Description 2',
    completed: true,
    level: Levels.Urgent
  };

  deleteTask(task: ITask) {
    // TODO: sustituir por un Splice para eliminar de la lista de tareas
    alert(`Se procede a eliminar la tarea: ${task.title}`);
  }

}
