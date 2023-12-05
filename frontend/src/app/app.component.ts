import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  taskService:TaskService = inject(TaskService)
  taskList:Task[] = []
  title = 'frontend';

  // pegar os dados do backend
  constructor(){
    this.taskService.getAllTasks().then(res=> {
      this.taskList = res
      console.log(this.taskList)
    })
  }
}
