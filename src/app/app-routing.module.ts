import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAgreementComponent } from './new-agreement/new-agreement.component';


const routes: Routes = [

{ path: 'new-agreement', component: NewAgreementComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
