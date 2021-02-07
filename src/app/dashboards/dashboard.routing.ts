import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { AuthGuardAdmin } from './AuthGuardAdmin';
import { AuthGuardOffice } from './AuthGuardOffice';
import { AuthGuardSupplier } from './AuthGuardSupplier';
import { CategoryComponent } from './category/category.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { RolesMangerComponent } from './roles-manger/roles-manger.component';
import { subcategoryComponent } from './subcategory/subcategory.component';
import { UsersMangerComponent } from './users-manger/users-manger.component';

export const DashboardRoutes: Routes = [
    {
       
        path: '',
       
        children: [
            {
                path: 'Home',
                canActivate:[AuthGuard],
                component: Dashboard1Component,
                data: {
                  
                    title: 'Home',
                    urls: [
                        { title: 'Home', url: '/Home' },
                        { title: 'Home' }
                    ]
                }
            },
            {
                path: 'Categories',
                canActivate:[AuthGuard],
                component: CategoryComponent,
                data: {
                    title: 'Category',
                    urls: [
                        { title: 'Category', url: '/Category' },
                        { title: 'Category' }
                    ]
                }
            },
            {
                path: 'subcategory',
                canActivate:[AuthGuard],
                component: subcategoryComponent,
                data: {
                    title: 'subcategory',
                    urls: [
                        { title: 'subcategory', url: '/subcategory' },
                        { title: 'subcategory' }
                    ]
                }
            },
            {
                path: 'Roles',
                canActivate:[AuthGuard],
                component: RolesMangerComponent,
                data: {
                    title: 'Roles',
                    urls: [
                        { title: 'Roles', url: '/Roles' },
                        { title: 'Roles' }
                    ]
                }
            },
            
            {
                path: 'Users',
                canActivate:[AuthGuard],
                component: UsersMangerComponent,
                data: {
                    title: 'Users',
                    urls: [
                        { title: 'Users', url: '/Users' },
                        { title: 'Users' }
                    ]
                }
            }
          
//MemberPolicyComponent
        ]
    },
    
];
