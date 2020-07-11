import { IconsModule } from './icons/icons.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { ChartsModule } from 'ng2-charts';
defineLocale('es', esLocale);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { GraficosComponent } from './graphs/graphs.component';
import { FooterComponent } from './footer/footer.component';
import { PieComponent } from './graphs/pie/pie.component';
import { BarsComponent } from './graphs/bars/bars.component';
import { DonutComponent } from './graphs/donut/donut.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    GraficosComponent,
    FooterComponent,
    PieComponent,
    BarsComponent,
    DonutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
