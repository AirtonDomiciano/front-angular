import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { IconModule } from '../shared/components/icon/icon.module';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavComponent } from './components/top-nav/model/top-nav.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SideNavComponent, TopNavComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    IconModule,
    // NgbModule,
    // MatToolbarModule
  ],
  exports: [SideNavComponent, TopNavComponent, FooterComponent],
})
export class CoreModule {}
