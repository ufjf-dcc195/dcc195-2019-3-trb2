import { UnitCrudComponent } from './components/unit-crud/unit-crud.component';
import { UsersCrudComponent } from './components/users-crud/users-crud.component';
import { LoginComponent } from './core/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AttendantCrudComponent } from './components/attendant-crud/attendant-crud.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: AttendantCrudComponent },
  { path: 'home', component: HomeComponent  },
  { path: 'new-user', component: UsersCrudComponent },
  { path: 'new-unit', component: UnitCrudComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
