import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'frontend';

  // pegar os dados do backend

}
