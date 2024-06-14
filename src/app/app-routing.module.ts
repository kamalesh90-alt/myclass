import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RtfComponent } from './rtf/rtf.component';
import { DatabindingComponent } from './components/databinding/databinding.component';




const routes: Routes = [
  {path:"",component:DatabindingComponent},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
