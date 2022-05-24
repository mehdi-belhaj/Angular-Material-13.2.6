import { DataListingComponent } from './data-listing/data-listing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-list-chemical-elements', component: DataListingComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'select', component: SelectComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
