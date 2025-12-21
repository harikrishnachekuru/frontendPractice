import { Routes } from '@angular/router';
import { Tasks } from './Component/tasks/tasks';
import { Learning } from './Component/learning/learning';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'tasks',
        pathMatch : 'full'
    },
    {
        path : 'tasks',
        component: Tasks
    },
    {
        path : 'learning',
        component : Learning
    }
];
