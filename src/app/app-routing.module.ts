import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('src/app/features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('src/app/features/login/login.module').then(m => m.LoginModule)
},
  {
    path: 'employee',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/features/employee/employee.module').then(m => m.EmployeeModule),
      },      
    ]
  },
  {
    path: 'hr',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/features/hr/hr.module').then(m => m.HrModule),
      },      
    ]
  },
  {
    path: 'manager',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/features/manager/manager.module').then(m => m.ManagerModule),
      },      
    ]
  },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
