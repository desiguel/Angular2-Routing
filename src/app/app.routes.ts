import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPermissionsComponent } from './admin/admin-permissions.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'admin', component: AdminComponent, children: [
            { path: '' },
            { path: 'permissions', component: AdminPermissionsComponent }

        ]
    }
];

export const routedComponents = RouterModule.forRoot(routes);