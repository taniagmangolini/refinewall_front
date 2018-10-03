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


import { FilterBlastPipe } from './filter/FilterBlastPipe';
import { FilterSucestByDescriptionGenePipe } from './filter/FilterSucestByDescriptionGenePipe';

import { ArraySortPipe } from './sorters/ArraySortPipe';

import { RefineService } from './services/Refine.service';

import { NgxPaginationModule } from 'ngx-pagination'; 
import {PopoverModule} from 'ng2-popover';
import { NguiTabModule } from '@ngui/tab';
import { SucestModalComponent } from './pages/home/modal/sucest-modal/sucest-modal.component';
import { UniprotModalComponent } from './pages/home/modal/uniprot-modal/uniprot-modal.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SucestModalComponent,
    UniprotModalComponent,
    FilterSucestByDescriptionGenePipe ,
    FilterBlastPipe,
    ArraySortPipe,
    LoadingComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule,
    AsyncLocalStorageModule,
    BrowserModule, 
    NgxPaginationModule,
    PopoverModule,
    NguiTabModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BootstrapModalModule.forRoot({container:document.body})
  ],
  providers: [
    RefineService
  ],
  entryComponents: [
    SucestModalComponent,
    UniprotModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
