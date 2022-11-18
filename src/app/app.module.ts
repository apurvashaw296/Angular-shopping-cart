import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductlistService } from './productlist.service';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';
// import { HelloComponent } from './hello.component';
// import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ProductListComponent,
    NavbarComponent,
    DetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,BrowserAnimationsModule
  ],
  providers: [ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
