import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthLayoutComponent } from './core/components/auth-layout/auth-layout.component';
import BaseLayoutComponent from './core/components/base-layout/base-layout.component';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, BaseLayoutComponent],
  imports: [
    NgbModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
