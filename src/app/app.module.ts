import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { routingComps, TechModule } from './tech/tech.module';
import { RouterModule } from '@angular/router';
import { GrdFilterPipePipe } from './custpipes/grd-filter-pipe.pipe';
import { GridSortPipe } from './custpipes/grid-sort.pipe';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProductComponent,
    ContactusComponent,
    GrdFilterPipePipe,
    GridSortPipe,
    routingComps,
    HomeComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule,TechModule,RouterModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
