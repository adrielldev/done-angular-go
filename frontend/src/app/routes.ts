
import { Routes } from '@angular/router';
import { TaskComponent } from "./task/task.component";
import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';

const routeConfig: Routes = [
  {
    path: 'task/:id',
    component: TaskComponent,
    title: 'Tarefa Específica'
  },
  {
  path:'dashboard',
  component:TaskListComponent,
  title:'Done! O melhor sistema para gerenciar suas tarefas'
  },
  {
    path:'task-create',
    component:TaskCreateComponent,
    title:'Criar tararefa'
  }
    ];

export default routeConfig;
