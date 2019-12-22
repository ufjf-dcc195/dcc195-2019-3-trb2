import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersCrudComponent } from './users-crud/users-crud.component';
import { UnitCrudComponent } from './unit-crud/unit-crud.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AttendantCrudComponent } from './attendant-crud/attendant-crud.component';



@NgModule({
  declarations: [
    HomeComponent,
    UsersCrudComponent,
    UnitCrudComponent,
    NavbarComponent,
    AttendantCrudComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ComumModule { }
