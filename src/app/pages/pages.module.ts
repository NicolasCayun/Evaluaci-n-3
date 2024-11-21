import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPage } from './inicio/inicio.page';

@NgModule({
  declarations: [
    InicioPage
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule, // Include FormsModule for form validation
    FormsModule,
  ]
})
export class PagesModule { }
