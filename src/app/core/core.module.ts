import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { IconModule } from '../shared/components/icon/icon.module';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { DropdownPerfilModule } from '../shared/components/dropdown-perfil/dropdown-perfil.module';
import { ConfiguracaoServicoModule } from '../pages/configuracao-servico/configuracao-servico.module';

@NgModule({
  declarations: [SideNavComponent, TopNavComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    IconModule,
    DropdownPerfilModule,
  ],
  exports: [SideNavComponent, TopNavComponent, FooterComponent],
})
export class CoreModule {}
