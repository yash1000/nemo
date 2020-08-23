import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { GetintouchComponent } from './pages/getintouch/getintouch.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OurstoryComponent } from './pages/ourstory/ourstory.component';
import { PopupsComponent } from './common/popups/popups.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PartnersComponent,
    GetintouchComponent,
    OurstoryComponent,
    PopupsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  entryComponents: [
    PopupsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
