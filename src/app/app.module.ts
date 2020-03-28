import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { HelloComponent } from './hello/hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'donor-list', component: DonorListComponent },
  { path: 'add-donor/:lat/:lng', component: AddDonorComponent },
  {
    path: '',
    redirectTo: '/donor-list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DonorListComponent,
    AddDonorComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
