import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'form1',
    loadChildren: () => import('./page/form1/form1.module').then(m => m.Form1Module)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'my-cal',
    loadChildren: () => import('./page/personal-calander/personal-calander.module').then(m => m.PersonalCalanderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
