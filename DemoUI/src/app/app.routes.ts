import { Routes } from '@angular/router';
import { Tasks } from './Component/tasks/tasks';
import { Learning } from './Component/learning/learning';
import { NotFound } from './Component/not-found/not-found';
//import { Home } from './Component/home/home';
import { Login } from './Component/login/login';
import { StudentList } from './Component/student-list/student-list';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'students',
        component: StudentList,
        canActivate: [AuthGuard]
    },
    {
        path: 'products',
        loadChildren: () =>
            import('./Component/products/product.routes').then(m => m.PRODUCT_ROUTES)
    },
    // {
    //     path: 'admin',
    //     loadChildren: () =>
    //         import('./Component/admin/admin.routes').then(m => m.ADMIN_ROUTES)
    // },
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
