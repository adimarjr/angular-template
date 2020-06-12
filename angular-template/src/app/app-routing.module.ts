import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    children: [
    { path: 'item', loadChildren: () => import('./test/test.module').then(mod => mod.TestModule) }
  ]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
