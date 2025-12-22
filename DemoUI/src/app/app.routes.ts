import { Routes } from '@angular/router';
import { Tasks } from './Component/tasks/tasks';
import { Learning } from './Component/learning/learning';
import { NotFound } from './Component/not-found/not-found';
import { Home } from './Component/home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'products',
        loadChildren: () =>
            import('./Component/products/product.routes').then(m => m.PRODUCT_ROUTES)
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./Component/admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {
        path: 'tasks',
        component: Tasks
    },
    {
        path: 'learning',
        component: Learning
    },
    {
        path: '**',
        component: NotFound
    }
];
