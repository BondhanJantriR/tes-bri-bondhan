import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesComponent } from './tes/pages/tes/tes.component';
import { Tes1Component } from './tes/pages/tes1/tes1.component';
import { Tes2Component } from './tes/pages/tes2/tes2.component';
import { Tes3Component } from './tes/pages/tes3/tes3.component';
import { Tes4Component } from './tes/pages/tes4/tes4.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/hasil-tes', 
    pathMatch: 'full'},
  {
    path: 'hasil-tes',
    component: TesComponent,
  },
  {
    path: 'tes1',
    component: Tes1Component
  },
  {
    path: 'tes2',
    component: Tes2Component
  },
  {
    path: 'tes3',
    component: Tes3Component
  },
  {
    path: 'tes4',
    component: Tes4Component
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
