import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { NewUserComponent } from './new-user.component';

import { NewUserRoutingModule } from './new-user-routing.module';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [NewUserComponent],
  imports: [
    CommonModule,
    NewUserRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class NewUserModule { }
