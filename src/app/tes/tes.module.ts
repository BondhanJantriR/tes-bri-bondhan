import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tes1Component } from './pages/tes1/tes1.component';
import { Tes2Component } from './pages/tes2/tes2.component';
import { Tes3Component } from './pages/tes3/tes3.component';
import { Tes4Component } from './pages/tes4/tes4.component';
import { FormsModule } from '@angular/forms';
import { TesComponent } from './pages/tes/tes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Tes1Component,
    Tes2Component,
    Tes3Component,
    Tes4Component,
    TesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
  ]
})
export class TesModule { }
