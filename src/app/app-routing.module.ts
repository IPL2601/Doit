import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'InicioSesion',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'entrada',
    component: MainPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
