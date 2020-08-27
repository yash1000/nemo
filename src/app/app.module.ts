import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { GetintouchComponent } from './pages/getintouch/getintouch.component';
import { OurstoryComponent } from './pages/ourstory/ourstory.component';
import { PopupsComponent } from './common/popups/popups.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';  
import { XpertComponent } from './pages/xpert/xpert.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApicallService } from './services/apicall.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PartnersComponent,
    GetintouchComponent,
    OurstoryComponent,
    PopupsComponent,
    XpertComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    PopupsComponent
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
