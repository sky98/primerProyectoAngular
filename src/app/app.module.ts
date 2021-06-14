import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {
    path: 'products', 
    loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule),
  },
  {
    path: 'newUser', 
    loadChildren: () => import('./new-user/new-user.module').then(mod => mod.NewUserModule),
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'newUser'
  },
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
