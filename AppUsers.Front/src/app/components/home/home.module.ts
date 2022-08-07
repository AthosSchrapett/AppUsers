import { UserRoutes } from './user/user.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    HttpClientModule,
    FormsModule
  ]
})
export class HomeModule { }
