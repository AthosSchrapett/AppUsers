import { NewUserRoutes } from './new-user.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user.component';

@NgModule({
  declarations: [
    NewUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(NewUserRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewUserModule { }
