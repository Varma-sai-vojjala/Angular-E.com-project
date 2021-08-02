import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from '../contactus/contactus.component';
import { ProductComponent } from '../product/product.component';
import { HomeComponent } from '../home/home.component';

const routes:Routes = [
  {path:'products', component:ProductComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'home',component:HomeComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechModule { }
export const routingComps = [ProductComponent, ContactusComponent,HomeComponent]