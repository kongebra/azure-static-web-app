import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { MainLayoutComponent } from './layout/main/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin/admin-layout/admin-layout.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [MainLayoutComponent, AdminLayoutComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,

    // material
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [MainLayoutComponent, AdminLayoutComponent],
  providers: [ApiService],
})
export class CoreModule {}
