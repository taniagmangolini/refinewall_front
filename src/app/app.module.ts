import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ROUTES } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';


import { UtilService } from './services/util.service';

import { NgxPaginationModule } from 'ngx-pagination'; 
import {PopoverModule} from 'ng2-popover';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BootstrapModalModule,
    FormsModule,
    HttpClientModule,
    AsyncLocalStorageModule,
    BrowserModule, 
    NgxPaginationModule,
    PopoverModule
  ],
  providers: [
    UtilService
  ],
  entryComponents: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
