
import { Routes } from '@angular/router';
import { TaskComponent } from "./task/task.component";

const routeConfig: Routes = [
  {
    path: 'task/:id',
    component: TaskComponent,
    title: 'Home details'
  }
];

export default routeConfig;
