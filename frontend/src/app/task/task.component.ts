import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  template: `<p>details works! {{ taskId }}</p>`,
  styleUrl: './task.component.css'
})
export class TaskComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  taskId = -1;
  constructor(){

    this.taskId = Number(this.route.snapshot.params['id'])
    console.log(this.taskId)
  }
}
