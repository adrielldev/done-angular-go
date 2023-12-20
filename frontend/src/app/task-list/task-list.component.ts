import { Component, inject } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterModule,CommonModule,TaskComponent],
  templateUrl:'./task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskService:TaskService = inject(TaskService)
  taskList:Task[] = []
  constructor(){
    this.taskService.getAllTasks().then(res=> {
      this.taskList = res
    })
  }
}
