import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl:'./task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {

  task: Task   = {
    done:false,
    name:''
  }
  constructor(){

  }
}
