import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path:'' , pathMatch: 'full' ,redirectTo:'login'},
  {path:'admin' , component: AdminComponent},
  {path:'login' , component: LoginComponent},
  {path:'productlist' , component: ProductListComponent},
  {path:'details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
