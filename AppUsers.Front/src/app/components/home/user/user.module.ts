import { UserRoutes } from './user.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
