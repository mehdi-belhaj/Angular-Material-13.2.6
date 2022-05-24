import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';

import { DataListingComponent } from './data-listing/data-listing.component';
import { ListComponent } from './data-listing/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    DataListingComponent,
    ListComponent,
    CheckboxComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule, // Needed for the search input box
    MatTableModule, // The core data table module
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
