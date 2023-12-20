import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl:'./task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  taskId = -1;
  taskNotFound = false;
  taskService:TaskService = inject(TaskService)

  @Input() tasks:Task[] = []

  @Input() task:Task = {
    done:false,
    ID:'',
    name:''
  }
  constructor(){

  }
  ngOnInit(){

    const id = this.route.snapshot.params['id']
    if(id) {
      this.taskService.getTaskById(id).then(task => {
        if(task){
          this.task = task
        } else {
          this.taskNotFound=true
        }
      })
    } else {
      console.log(this.task)
    }


  }
}
